/* eslint-disable react/no-unknown-property */
import { useRef, useState, useEffect, useMemo, useCallback } from 'react';
import { useFrame } from '@react-three/fiber';
import { Text, useTexture, Html, useCursor } from '@react-three/drei';
import * as THREE from 'three';

const PAPER_WIDTH = 1.51;
const PAPER_HEIGHT = 1.7;
const FONT_PATH = '/fonts/CabinSketch-Regular.ttf';

// Helper: Interactive Text Field with Smooth Animation and Invisible Hitbox
const InteractiveTextField = ({
    isActive,
    value,
    placeholder,
    cursor,
    position,
    baseRotation,
    hitboxPosition,
    hitboxSize,
    fontSize,
    maxWidth,
    anchorX = 'left',
    anchorY = 'middle',
    fontPath,
    textAlign,
    lineHeight,
    onClick
}) => {
    const textRef = useRef();
    const [hovered, setHovered] = useState(false);
    useCursor(hovered);

    const targetY = hovered ? position[1] + 0.007 : position[1];
    const targetRotZ = hovered ? baseRotation[2] + 0.015 : baseRotation[2];

    useFrame((state, delta) => {
        const t = delta * 12;
        if (textRef.current) {
            textRef.current.position.y = THREE.MathUtils.lerp(textRef.current.position.y, targetY, t);
            textRef.current.rotation.z = THREE.MathUtils.lerp(textRef.current.rotation.z, targetRotZ, t);
        }
    });

    return (
        <group
            onPointerOver={() => setHovered(true)}
            onPointerOut={() => setHovered(false)}
            onClick={(e) => {
                e.stopPropagation();
                onClick && onClick();
            }}
        >
            <mesh position={hitboxPosition} rotation={[-Math.PI / 2, 0, 0]}>
                <planeGeometry args={hitboxSize} />
                <meshBasicMaterial color="#e0e0e0" colorWrite={false} depthWrite={false} />
            </mesh>

            <Text
                renderOrder={1}
                ref={textRef}
                position={position}
                rotation={baseRotation}
                fontSize={fontSize}
                color={hovered ? '#111111' : '#333333'}
                font={fontPath}
                anchorX={anchorX}
                anchorY={anchorY}
                maxWidth={maxWidth}
                textAlign={textAlign}
                lineHeight={lineHeight}
            >
                {isActive ? (value + cursor) : (value || placeholder)}
            </Text>
        </group>
    );
};

// Helper: Smooth Animated Button
const SmoothButton = ({ texture, onClick, position, size, text, fontPath }) => {
    const groupRef = useRef();
    const [hovered, setHovered] = useState(false);
    useCursor(hovered);

    const targetY = hovered ? position[1] + 0.007 : position[1];
    const targetRotZ = hovered ? 0.015 : 0;

    useFrame((state, delta) => {
        const t = delta * 12;
        if (groupRef.current) {
            groupRef.current.position.y = THREE.MathUtils.lerp(groupRef.current.position.y, targetY, t);
            groupRef.current.rotation.z = THREE.MathUtils.lerp(groupRef.current.rotation.z, targetRotZ, t);
            groupRef.current.scale.set(1, 1, 1);
        }
    });

    return (
        <group
            ref={groupRef}
            position={position}
            onClick={(e) => {
                e.stopPropagation();
                onClick && onClick();
            }}
            onPointerOver={() => setHovered(true)}
            onPointerOut={() => setHovered(false)}
        >
            <mesh rotation={[-Math.PI / 2, 0, 0]}>
                <planeGeometry args={size} />
                <meshBasicMaterial color="#e0e0e0"
                    map={texture}
                    transparent
                    alphaTest={0.1}
                />
            </mesh>
            {text && (
                <Text
                    renderOrder={1}
                    position={[0, 0.005, 0]}
                    rotation={[-Math.PI / 2, 0, 0]}
                    fontSize={0.06}
                    color="#333333"
                    font={fontPath}
                    anchorX="center"
                    anchorY="middle"
                >
                    {text}
                </Text>
            )}
        </group>
    );
};

// Web3Forms API Key — loaded from environment variable so it's not exposed in the repo.
// Set VITE_WEB3FORMS_KEY in .env (local dev) and in Cloudflare Pages dashboard (production).
// Get your free key at: https://web3forms.com
const WEB3FORMS_KEY = import.meta.env.VITE_WEB3FORMS_KEY || '';

// Only these domains are allowed to submit the form.
// Anyone cloning the repo and running on localhost will be silently blocked.
// TODO: Add your own domain here once deployed (e.g. 'biharkebahubali.pages.dev')
const ALLOWED_ORIGINS = [
    // Add your production domain(s) here after deploying
    // Example: 'your-username.github.io'
    // Example: 'your-portfolio.vercel.app'
];

// ═══════════════════════════════════════════════════════════════════════
// 2026 Advanced Anti-Spam System
// Multi-layer defense: Bigram NLP analysis, rate limiting, timing traps
// ═══════════════════════════════════════════════════════════════════════

const COMMON_BIGRAMS = new Set([
    'th','he','in','er','an','re','on','at','en','nd','ti','es','or','te','of',
    'ed','is','it','al','ar','st','to','nt','ng','se','ha','as','ou','io','le',
    've','co','me','de','hi','ri','ro','ic','ne','ea','ra','ce','li','ch','ll',
    'be','ma','si','om','ur','ca','el','ta','la','ns','ge','ly','il','no','pe',
    'do','ss','ec','oo','so','us','wa','we','yo','lo','ow','wi','tr','su','pr',
    'ie','rz','sz','cz','ni','na','po','prz','od','do','ść','za','ko','ow',
    'sk','st','mi','wy','dz','ka','ra','je','ro','em','os','ak','ek','go',
    'ał','ze','cz','rz','ja','ma','ci','ło','wa','da','no','mo','li','ić',
]);

const scoreWord = (word) => {
    if (word.length <= 2) return 1.0;
    if (/^https?:\/\//i.test(word)) return 1.0;
    if (/^\d+$/.test(word)) return 1.0;
    if (/^[^a-zA-ZąćęłńóśźżĄĆĘŁŃÓŚŹŻ]+$/.test(word)) return 1.0;

    const lower = word.toLowerCase();
    let hits = 0;
    let total = 0;

    for (let i = 0; i < lower.length - 1; i++) {
        const bigram = lower[i] + lower[i + 1];
        if (/[a-ząćęłńóśźż]{2}/.test(bigram)) {
            total++;
            if (COMMON_BIGRAMS.has(bigram)) hits++;
        }
    }

    if (total === 0) return 1.0;
    const bigramScore = hits / total;

    const vowels = (lower.match(/[aeiouyąęó]/g) || []).length;
    const alpha = (lower.match(/[a-ząćęłńóśźż]/g) || []).length;
    const vowelRatio = alpha > 0 ? vowels / alpha : 0;
    const vowelPenalty = (vowelRatio < 0.15 || vowelRatio > 0.85) ? 0.3 : 1.0;

    const hasHugeCluster = /[bcdfghjklmnpqrstvwxzżźć]{4,}/i.test(lower);
    const clusterPenalty = hasHugeCluster ? 0.5 : 1.0;

    return bigramScore * vowelPenalty * clusterPenalty;
};

const analyzeContentAI = (text, isSubject = false) => {
    if (!text || text.trim().length < (isSubject ? 2 : 3)) return { isSpam: true, reason: 'Message too short' };

    const cleaned = text.trim();

    if (!isSubject && cleaned.length <= 15 && !cleaned.includes(' ')) {
        const commonShort = /^(hi|hey|hello|thanks|thank you|cool|nice|ok|okay|yes|no|sup|yo|cheers|hej|cześć|dzięki|siema|elo)$/i;
        if (!commonShort.test(cleaned)) {
            return { isSpam: true, reason: 'Too short to be a real message' };
        }
    }

    const words = cleaned.split(/\s+/).filter(w => w.length > 0);
    const scorableWords = words.filter(w => w.length > 2 && /[a-zA-ZąćęłńóśźżĄĆĘŁŃÓŚŹŻ]/.test(w));

    if (scorableWords.length === 0) return { isSpam: true, reason: 'No real words detected' };

    const wordScores = scorableWords.map(w => scoreWord(w));
    const avgScore = wordScores.reduce((a, b) => a + b, 0) / wordScores.length;

    const gibberishCount = wordScores.filter(s => s < 0.25).length;
    const gibberishRatio = gibberishCount / scorableWords.length;

    if (avgScore < 0.2) {
        return { isSpam: true, reason: 'Content appears to be gibberish' };
    }
    if (gibberishRatio >= 0.6 && scorableWords.length >= 2) {
        return { isSpam: true, reason: 'Too many unrecognizable words' };
    }

    const allAlpha = (cleaned.toLowerCase().match(/[a-ząćęłńóśźż]/g) || []);
    const allVowels = (cleaned.toLowerCase().match(/[aeiouyąęó]/g) || []);
    if (allAlpha.length > 8 && allVowels.length / allAlpha.length < 0.12) {
        return { isSpam: true, reason: 'Suspicious character distribution' };
    }

    return { isSpam: false };
};

const RATE_LIMIT_MINUTES = 30;
const RATE_LIMIT_KEY = 'portfolio_contact_rl';

const checkRateLimit = () => {
    try {
        const stored = localStorage.getItem(RATE_LIMIT_KEY);
        if (!stored) return { allowed: true };
        const lastSend = parseInt(stored, 10);
        const elapsed = Date.now() - lastSend;
        const remaining = (RATE_LIMIT_MINUTES * 60 * 1000) - elapsed;
        if (remaining > 0) {
            const mins = Math.ceil(remaining / 60000);
            return { allowed: false, minutesLeft: mins };
        }
        return { allowed: true };
    } catch {
        return { allowed: true };
    }
};

const recordSubmission = () => {
    try {
        localStorage.setItem(RATE_LIMIT_KEY, Date.now().toString());
    } catch { /* silently fail */ }
};


const MessagePaper = ({ position = [0, 0.05, 2], onSend }) => {
    const groupRef = useRef();
    const paperRef = useRef();
    const backPaperRef = useRef();
    const hiddenInputRef = useRef();
    const emailInputRef = useRef();
    const subjectInputRef = useRef();

    const [message, setMessage] = useState('');
    const [email, setEmail] = useState('');
    const [subject, setSubject] = useState('');
    const [activeField, setActiveField] = useState(null);
    const [cursorVisible, setCursorVisible] = useState(true);
    const [botcheck, setBotcheck] = useState('');
    const formLoadedAt = useRef(Date.now());

    const [errors, setErrors] = useState({});
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitStatus, setSubmitStatus] = useState(null);

    const isValidEmail = (email) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

    const validateForm = () => {
        const newErrors = {};
        if (!email.trim()) newErrors.email = 'Email required';
        else if (!isValidEmail(email)) newErrors.email = 'Invalid email format';
        if (!subject.trim()) newErrors.subject = 'Subject required';
        if (!message.trim()) newErrors.message = 'Message required';
        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const paperTexture = useTexture('/textures/contact/paper_form.webp');
    const buttonTexture = useTexture('/textures/contact/send_button.webp');

    useEffect(() => {
        if (paperTexture) paperTexture.colorSpace = THREE.SRGBColorSpace;
        if (buttonTexture) buttonTexture.colorSpace = THREE.SRGBColorSpace;
    }, [paperTexture, buttonTexture]);

    useEffect(() => {
        if (!activeField) {
            setCursorVisible(false);
            return;
        }
        const interval = setInterval(() => setCursorVisible(prev => !prev), 530);
        return () => clearInterval(interval);
    }, [activeField]);

    const handlePaperClick = useCallback((e) => {
        e.stopPropagation();
        if (!e.uv) return;
        const uvY = e.uv.y;

        if (uvY > 0.82) {
            setActiveField('email');
            setTimeout(() => emailInputRef.current?.focus(), 10);
        } else if (uvY > 0.68) {
            setActiveField('subject');
            setTimeout(() => subjectInputRef.current?.focus(), 10);
        } else if (uvY > 0.18) {
            setActiveField('message');
            setTimeout(() => hiddenInputRef.current?.focus(), 10);
        }
    }, []);

    const handleButtonClick = useCallback(async () => {
        setSubmitStatus(null);

        if (!validateForm()) {
            return;
        }

        setIsSubmitting(true);
        setErrors({});

        try {
            const rateCheck = checkRateLimit();
            if (!rateCheck.allowed) {
                setErrors({ message: `Please wait ${rateCheck.minutesLeft} min before sending again.` });
                setIsSubmitting(false);
                return;
            }

            const timeOnForm = Date.now() - formLoadedAt.current;
            if (timeOnForm < 3000) {
                setSubmitStatus('success');
                setIsSubmitting(false);
                return;
            }

            const currentHost = window.location.hostname;
            const isAllowedOrigin = ALLOWED_ORIGINS.length === 0 || ALLOWED_ORIGINS.some(d => currentHost === d || currentHost.endsWith('.' + d));
            if (!isAllowedOrigin) {
                setSubmitStatus('success');
                setIsSubmitting(false);
                return;
            }

            if (botcheck) {
                setSubmitStatus('success');
                setIsSubmitting(false);
                return;
            }

            const subjectAnalysis = analyzeContentAI(subject, true);
            const messageAnalysis = analyzeContentAI(message, false);

            if (subjectAnalysis.isSpam || messageAnalysis.isSpam) {
                setErrors({ message: 'Our AI flagged this as spam. Please write clearly.' });
                setIsSubmitting(false);
                return;
            }

            const domain = email.split('@')[1];
            if (domain) {
                try {
                    const dnsRes = await fetch(`https://cloudflare-dns.com/dns-query?name=${domain}&type=MX`, {
                        headers: { 'Accept': 'application/dns-json' }
                    });
                    const dnsData = await dnsRes.json();
                    
                    if (dnsData.Status === 3 || (dnsData.Status === 0 && (!dnsData.Answer || !dnsData.Answer.some(a => a.type === 15)))) {
                        setErrors({ email: 'Domain does not exist or cannot receive emails.' });
                        setIsSubmitting(false);
                        return;
                    }
                } catch (dnsErr) {
                    console.warn('DNS validation failed, bypassing...', dnsErr);
                }
            }

            const response = await fetch('https://api.web3forms.com/submit', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json'
                },
                body: JSON.stringify({
                    access_key: WEB3FORMS_KEY,
                    from_name: 'Bihar Ke Bahubali Portfolio',
                    email: email,
                    subject: subject,
                    message: message
                })
            });

            const result = await response.json();

            if (result.success) {
                setSubmitStatus('success');
                recordSubmission();
                onSend?.({ message, email, subject });

                setMessage('');
                setEmail('');
                setSubject('');
                formLoadedAt.current = Date.now();
            } else {
                throw new Error(result.message || 'Failed to send');
            }
        } catch (error) {
            setSubmitStatus('error');
        } finally {
            setIsSubmitting(false);
        }
    }, [message, email, subject, onSend, validateForm]);

    const handleMessageInput = useCallback((e) => {
        if (e.target.value.length <= 300) setMessage(e.target.value);
    }, []);
    const handleEmailInput = useCallback((e) => {
        if (e.target.value.length <= 50) setEmail(e.target.value);
    }, []);
    const handleSubjectInput = useCallback((e) => {
        if (e.target.value.length <= 50) setSubject(e.target.value);
    }, []);
    const handleBotcheckInput = useCallback((e) => {
        setBotcheck(e.target.checked);
    }, []);

    const handleBlur = useCallback(() => {
        setTimeout(() => {
            const active = document.activeElement;
            if (active !== hiddenInputRef.current &&
                active !== emailInputRef.current &&
                active !== subjectInputRef.current) {
                setActiveField(null);
            }
        }, 100);
    }, []);

    const formattedMessage = useMemo(() => {
        const maxCharsPerLine = 28;
        const maxLines = 10;
        const lines = [];
        const words = message.split(' ');
        let currentLine = '';

        const breakLongWord = (word) => {
            const chunks = [];
            while (word.length > maxCharsPerLine) {
                chunks.push(word.slice(0, maxCharsPerLine));
                word = word.slice(maxCharsPerLine);
            }
            if (word) chunks.push(word);
            return chunks;
        };

        words.forEach(word => {
            if (word.length > maxCharsPerLine) {
                if (currentLine) { lines.push(currentLine); currentLine = ''; }
                const brokenWord = breakLongWord(word);
                brokenWord.forEach((chunk, i) => {
                    if (i < brokenWord.length - 1) lines.push(chunk);
                    else currentLine = chunk;
                });
            } else if ((currentLine + ' ' + word).trim().length <= maxCharsPerLine) {
                currentLine = (currentLine + ' ' + word).trim();
            } else {
                if (currentLine) lines.push(currentLine);
                currentLine = word;
            }
        });
        if (currentLine) lines.push(currentLine);
        return lines.slice(0, maxLines).join('\n');
    }, [message]);

    useFrame((state, delta) => {
        if (!paperRef.current) return;

        const time = state.clock.getElapsedTime();

        paperRef.current.rotation.z = Math.sin(time * 0.5) * 0.005;
    });

    return (
        <group ref={groupRef} position={position}>
            <Html position={[0, 0, 0]} style={{ position: 'fixed', left: '-9999px', top: '-9999px', opacity: 0, pointerEvents: 'none' }}>
                <textarea ref={hiddenInputRef} value={message} onChange={handleMessageInput} onBlur={handleBlur} aria-label="Message" style={{ pointerEvents: 'auto' }} />
                <input ref={emailInputRef} type="email" value={email} onChange={handleEmailInput} onBlur={handleBlur} aria-label="Email" style={{ pointerEvents: 'auto' }} />
                <input ref={subjectInputRef} type="text" value={subject} onChange={handleSubjectInput} onBlur={handleBlur} aria-label="Subject" style={{ pointerEvents: 'auto' }} />
                <input type="checkbox" name="botcheck" checked={botcheck} onChange={handleBotcheckInput} style={{ pointerEvents: 'auto' }} />
            </Html>

            <mesh ref={paperRef} rotation={[-Math.PI / 2, 0, 0]} onClick={handlePaperClick}>
                <planeGeometry args={[PAPER_WIDTH, PAPER_HEIGHT, 20, 20]} />
                <meshBasicMaterial color="#e0e0e0"
                    map={paperTexture}
                    transparent
                    alphaTest={0.5}
                    side={THREE.FrontSide}
                    roughness={0.9}
                />
            </mesh>

            <mesh ref={backPaperRef} rotation={[-Math.PI / 2, 0, 0]}>
                <planeGeometry args={[PAPER_WIDTH, PAPER_HEIGHT, 20, 20]} />
                <meshBasicMaterial
                    color="#f5f5f0"
                    side={THREE.BackSide}
                    roughness={0.9}
                />
            </mesh>

            <>
                <InteractiveTextField
                    isActive={activeField === 'email'}
                    value={email}
                    placeholder="email..."
                    cursor={cursorVisible ? '|' : ' '}
                    onClick={() => { setActiveField('email'); setTimeout(() => emailInputRef.current?.focus(), 10); }}
                    position={[-0.5, 0.008, -0.61]}
                    baseRotation={[-Math.PI / 2, 0, 0.02]}
                    hitboxPosition={[0, 0.005, -0.61]}
                    hitboxSize={[PAPER_WIDTH * 0.85, 0.08]}
                    fontSize={0.05}
                    maxWidth={PAPER_WIDTH * 0.8}
                    fontPath={FONT_PATH}
                />

                <InteractiveTextField
                    isActive={activeField === 'subject'}
                    value={subject}
                    placeholder="subject..."
                    cursor={cursorVisible ? '|' : ' '}
                    onClick={() => { setActiveField('subject'); setTimeout(() => subjectInputRef.current?.focus(), 10); }}
                    position={[-0.5, 0.008, -0.46]}
                    baseRotation={[-Math.PI / 2, 0, 0.02]}
                    hitboxPosition={[0, 0.005, -0.46]}
                    hitboxSize={[PAPER_WIDTH * 0.85, 0.08]}
                    fontSize={0.05}
                    maxWidth={PAPER_WIDTH * 0.8}
                    fontPath={FONT_PATH}
                />

                <InteractiveTextField
                    isActive={activeField === 'message'}
                    value={formattedMessage}
                    placeholder="message..."
                    cursor={cursorVisible ? '|' : ' '}
                    onClick={() => { setActiveField('message'); setTimeout(() => hiddenInputRef.current?.focus(), 10); }}
                    position={[-0.46, 0.008, -0.3]}
                    baseRotation={[-Math.PI / 2, 0, 0.02]}
                    hitboxPosition={[0, 0.005, 0.1]}
                    hitboxSize={[PAPER_WIDTH * 0.85, 0.55]}
                    fontSize={0.045}
                    maxWidth={PAPER_WIDTH * 0.75}
                    fontPath={FONT_PATH}
                    anchorY="top"
                    textAlign="left"
                    lineHeight={1.35}
                />

                <SmoothButton
                    texture={buttonTexture}
                    onClick={handleButtonClick}
                    position={[0, 0.005, 0.68]}
                    size={[0.5, 0.13]}
                    text={isSubmitting ? 'SENDING...' : 'SEND'}
                    fontPath={FONT_PATH}
                />

                {Object.keys(errors).length > 0 && (
                    <Text
                        position={[0, 0.01, 0.55]}
                        rotation={[-Math.PI / 2, 0, 0]}
                        fontSize={0.035}
                        color="#cc3333"
                        font={FONT_PATH}
                        anchorX="center"
                        anchorY="middle"
                    >
                        {errors.email || errors.subject || errors.message || 'Please fill all fields'}
                    </Text>
                )}

                {submitStatus === 'success' && (
                    <Text
                        position={[0, 0.02, 0.55]}
                        rotation={[-Math.PI / 2, 0, 0]}
                        fontSize={0.045}
                        color="#22aa44"
                        font={FONT_PATH}
                        anchorX="center"
                        anchorY="middle"
                    >
                        Message sent! ✓
                    </Text>
                )}

                {submitStatus === 'error' && (
                    <Text
                        position={[0, 0.02, 0.55]}
                        rotation={[-Math.PI / 2, 0, 0]}
                        fontSize={0.04}
                        color="#cc3333"
                        font={FONT_PATH}
                        anchorX="center"
                        anchorY="middle"
                    >
                        Failed to send. Try again.
                    </Text>
                )}
            </>
        </group>
    );
};

export default MessagePaper;