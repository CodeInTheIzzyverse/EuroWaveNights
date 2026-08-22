import useSEO from '@/hooks/useSEO';
import './Contact.scss';
import { useContact } from '@/hooks/useContact';
import { PATHS } from '@/constants/routes';
import PixelWindow from '@/components/Layout/PixelWindow/PixelWindow';
import Button from '@/components/UI/Buttons/Button';
import ChannelCard from '@/components/UI/Cards/ChannelCard/ChannelCard';
import platformsData from '@/data/platforms.json';
import type { Platform } from '@/types/channel';

const CHANNELS: Platform[] = (platformsData as Platform[]).filter((p) => p.isSocial);

const Contact = () => {
    useSEO({
        title: 'Contact Terminal | EuroWave Nights & LatePassenger',
        description:
            'Send direct transmissions to EuroWave Nights and LatePassenger for music production, audio mixing, stem mastering, custom synth tracks, and radio submissions.',
        keywords:
            'EuroWave Nights contact, LatePassenger booking, synthwave producer contact, audio mixing inquiry, stem mastering services, synthwave licensing, radio broadcast submission',
        favicon: '/images/EuroWaveNightsIsotipo.png',
    });

    const {
        formData,
        status,
        errorMessage,
        successInfo,
        handleChange,
        handleSubmit,
        handleReset,
    } = useContact();

    return (
        <main className='contact bg-cyber-grid'>
            <div className='container'>
                <section className='contact__intro'>
                    <span className="status-badge status-active" style={{ marginBottom: '16px' }}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24">
                            <path d="M0 0h24v24H0z" fill="none" />
                            <g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2">
                                <path d="M16.247 7.761a6 6 0 0 1 0 8.478m2.828-11.306a10 10 0 0 1 0 14.134m-14.15 0a10 10 0 0 1 0-14.134m2.828 11.306a6 6 0 0 1 0-8.478" />
                                <circle cx="12" cy="12" r="2" />
                            </g>
                        </svg>

                        CLANDESTINE TERMINAL ONLINE
                    </span>

                    <h1 style={{ marginBottom: '12px' }}>CONTACT TERMINAL</h1>

                    <p className="body-text" style={{ fontSize: '1.1rem' }}>Send a transmission to EuroWave Nights and LatePassenger for music production, mixing, mastering, custom synth tracks, or station broadcast inquiries.</p>
                </section>

                <section className="contact__grid">
                    <article className="contact__form">
                        <PixelWindow
                            title="RESEND_TRANSMISSION_TERMINAL.EXE"
                            statusText={status === 'submitting' ? 'TRANSMITTING' : status === 'success' ? 'SENT' : 'READY'}
                            icon={
                                <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24">
                                    <path d="M0 0h24v24H0z" fill="none" />
                                    <g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2">
                                        <path d="M16.247 7.761a6 6 0 0 1 0 8.478m2.828-11.306a10 10 0 0 1 0 14.134m-14.15 0a10 10 0 0 1 0-14.134m2.828 11.306a6 6 0 0 1 0-8.478" />
                                        <circle cx="12" cy="12" r="2" />
                                    </g>
                                </svg>
                            }
                        >
                            {status === 'success' ? (
                                <div className="contact__form--success">
                                    <div className="success__icon">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24">
                                            <path d="M0 0h24v24H0z" fill="none" />
                                            <g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2">
                                                <circle cx="12" cy="12" r="10" />
                                                <path d="m9 12l2 2l4-4" />
                                            </g>
                                        </svg>
                                    </div>

                                    <h3>MESSAGE SENT SUCCESSFULLY</h3>
                                    <p>
                                        {successInfo.message ||
                                            'Your message has been routed through the Resend relay directly to EuroWave Nights station management.'}
                                    </p>

                                    <div className="contact__form__receipt">
                                        <div>
                                            <span className="receipt-label">CALLSIGN / NAME:</span>
                                            <span className="receipt-val">{formData.name}</span>
                                        </div>
                                        <div>
                                            <span className="receipt-label">RETURN EMAIL:</span>
                                            <span className="receipt-val">{formData.email}</span>
                                        </div>
                                        <div>
                                            <span className="receipt-label">SUBJECT:</span>
                                            <span className="receipt-val">{formData.subject}</span>
                                        </div>
                                        <div>
                                            <span className="receipt-label">RELAY:</span>
                                            <span className="receipt-val">RESEND DIRECT SERVICE</span>
                                        </div>
                                    </div>

                                    <Button
                                        variant="primary"
                                        onClick={handleReset}
                                        icon={
                                            <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24">
                                                <path d="M0 0h24v24H0z" fill="none" />
                                                <g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2">
                                                    <path d="M3 12a9 9 0 0 1 9-9a9.75 9.75 0 0 1 6.74 2.74L21 8" />
                                                    <path d="M21 3v5h-5m5 4a9 9 0 0 1-9 9a9.75 9.75 0 0 1-6.74-2.74L3 16" />
                                                    <path d="M8 16H3v5" />
                                                </g>
                                            </svg>
                                        }
                                    >
                                        TRANSMIT ANOTHER MESSAGE
                                    </Button>
                                </div>
                            ) : (
                                <form onSubmit={handleSubmit} noValidate>
                                    <div className="contact__form__header">
                                        <div className="contact__form__status">
                                            <span className="blink-dot" />
                                            <span>RELAY: TRANSMISSION API READY</span>
                                        </div>
                                        <span className="contact__form__protocol">[SECURE 256-BIT DISPATCH]</span>
                                    </div>

                                    {status === 'error' && (
                                        <div className="contact__form__alert">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24">
                                                <path d="M0 0h24v24H0z" fill="none" />
                                                <path fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m21.73 18l-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3M12 9v4m0 4h.01" />
                                            </svg>
                                            <span>{errorMessage}</span>
                                        </div>
                                    )}

                                    <div className="contact__form__row contact__form__row--dual">
                                        <div className="contact__form__group">
                                            <label htmlFor="contact-name">
                                                NAME <span className="req">*</span>
                                            </label>
                                            <input
                                                id="contact-name"
                                                type="text"
                                                name="name"
                                                value={formData.name}
                                                onChange={handleChange}
                                                placeholder="Your name or callsign"
                                                className="contact__form__input"
                                                required
                                                disabled={status === 'submitting'}
                                            />
                                        </div>

                                        <div className="contact__form__group">
                                            <label htmlFor="contact-email">
                                                EMAIL <span className="req">*</span>
                                            </label>
                                            <input
                                                id="contact-email"
                                                type="email"
                                                name="email"
                                                value={formData.email}
                                                onChange={handleChange}
                                                placeholder="your.email@example.com"
                                                className="contact__form__input"
                                                required
                                                disabled={status === 'submitting'}
                                            />
                                        </div>
                                    </div>

                                    <div className="contact__form__group">
                                        <label htmlFor="contact-subject">
                                            SUBJECT <span className="req">*</span>
                                        </label>
                                        <input
                                            id="contact-subject"
                                            type="text"
                                            name="subject"
                                            value={formData.subject}
                                            onChange={handleChange}
                                            placeholder="e.g. Music Production or Mastering Request"
                                            className="contact__form__input"
                                            required
                                            disabled={status === 'submitting'}
                                        />
                                    </div>

                                    <div className="contact__form__group">
                                        <label htmlFor="contact-message">
                                            MESSAGE <span className="req">*</span>
                                        </label>
                                        <textarea
                                            id="contact-message"
                                            name="message"
                                            rows={5}
                                            value={formData.message}
                                            onChange={handleChange}
                                            placeholder="Enter your message details (at least 10 characters)..."
                                            className="contact__form__textarea"
                                            required
                                            disabled={status === 'submitting'}
                                        />
                                    </div>

                                    <div className="contact__form__button">
                                        <Button
                                            type="submit"
                                            variant="primary"
                                            size="lg"
                                            fullWidth
                                            disabled={status === 'submitting'}
                                            icon={status === 'submitting' ? (
                                                <svg className="animate-spin" xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24">
                                                    <path d="M0 0h24v24H0z" fill="none" />
                                                    <path fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 12a9 9 0 1 1-6.219-8.56" />
                                                </svg>
                                            ) : (
                                                <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24">
                                                    <path d="M0 0h24v24H0z" fill="none" />
                                                    <path fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14.536 21.686a.5.5 0 0 0 .937-.024l6.5-19a.496.496 0 0 0-.635-.635l-19 6.5a.5.5 0 0 0-.024.937l7.93 3.18a2 2 0 0 1 1.112 1.11zm7.318-19.539l-10.94 10.939" />
                                                </svg>
                                            )}
                                        >
                                            {status === 'submitting' ? 'SENDING MESSAGE...' : 'SEND MESSAGE VIA RESEND'}
                                        </Button>
                                    </div>
                                </form>
                            )}
                        </PixelWindow>
                    </article>

                    <aside className="contact__social">
                        <div className="contact__social__header">
                            <div className="contact__social__icon">
                                <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24">
                                    <path d="M0 0h24v24H0z" fill="none" />
                                    <g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2">
                                        <circle cx="18" cy="5" r="3" />
                                        <circle cx="6" cy="12" r="3" />
                                        <circle cx="18" cy="19" r="3" />
                                        <path d="m8.59 13.51l6.83 3.98m-.01-10.98l-6.82 3.98" />
                                    </g>
                                </svg>
                            </div>
                            <div className='contact__social__text'>
                                <h3>SOCIAL NETWORKS</h3>
                                <p>BROADCAST FREQUENCIES</p>
                            </div>
                        </div>

                        <p className='contact__social__desc'>
                            Tune into clandestine audio feeds and visual broadcasts across all official platforms.
                        </p>

                        <div className="contact__social__channels">
                            {
                                CHANNELS.map((channel, i) => (
                                    <ChannelCard key={i} channel={channel} />
                                ))
                            }
                        </div>

                        <div className="contact__social__footer">
                            <Button
                                to={PATHS.LINKS}
                                variant="outline"
                                fullWidth
                                icon={
                                    <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24">
                                        <path d="M0 0h24v24H0z" fill="none" />
                                        <path fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 7h10v10M7 17L17 7" />
                                    </svg>
                                }
                            >
                                VIEW ALL BROADCAST LINKS
                            </Button>
                        </div>
                    </aside>
                </section>

                <section className="contact__footer">
                    <PixelWindow title="ENCRYPTED_SIGNAL_POLICY.LOG" statusText="SECURE">
                        <div className="contact__footer__reassurance">
                            <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24">
                                <path className="privacy-icon" d="M0 0h24v24H0z" fill="none" />
                                <path fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z" />
                            </svg>
                            <div className="contact__footer__text">
                                <strong>ANONYMITY & TRANSMISSION PRIVACY:</strong> All contact transmissions and project briefs sent through the Resend relay are treated with strict confidentiality by EuroWave Nights and LatePassenger. Contact records are never shared or published.
                            </div>
                        </div>
                    </PixelWindow>
                </section>
            </div>
        </main >
    );
}

export default Contact;