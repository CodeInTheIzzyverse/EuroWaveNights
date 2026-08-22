import type { Service } from "@/types/service";
import './ServiceCard.scss';
import Button from "@/components/UI/Buttons/Button";

interface ServiceCardProps {
    service: Service;
    index: number;
}

const ServiceCard = ({ service, index }: ServiceCardProps) => {
    const getIcon = (name: string) => {
        switch (name) {
            case 'Sliders': return (
                <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24">
                    <path d="M0 0h24v24H0z" fill="none" />
                    <path fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 8h4m-2 13v-9m0-4V3m5 13h4m-2-4V3m0 18v-5M3 14h4m-2-4V3m0 18v-7" />
                </svg>
            );
            case 'Radio': return (
                <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24">
                    <path d="M0 0h24v24H0z" fill="none" />
                    <g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2">
                        <path d="M16.247 7.761a6 6 0 0 1 0 8.478m2.828-11.306a10 10 0 0 1 0 14.134m-14.15 0a10 10 0 0 1 0-14.134m2.828 11.306a6 6 0 0 1 0-8.478" />
                        <circle cx="12" cy="12" r="2" />
                    </g>
                </svg>
            );
            case 'Music': return (
                <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24">
                    <path d="M0 0h24v24H0z" fill="none" />
                    <g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2">
                        <path d="M9 18V5l12-2v13" />
                        <circle cx="6" cy="18" r="3" />
                        <circle cx="18" cy="16" r="3" />
                    </g>
                </svg>
            );
            case 'Mic': return (
                <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24">
                    <path d="M0 0h24v24H0z" fill="none" />
                    <g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2">
                        <path d="M12 19v3m7-12v2a7 7 0 0 1-14 0v-2" />
                        <rect width="6" height="13" x="9" y="2" rx="3" />
                    </g>
                </svg>
            );
            case 'Activity': return (
                <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24">
                    <path d="M0 0h24v24H0z" fill="none" />
                    <path fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M22 12h-2.48a2 2 0 0 0-1.93 1.46l-2.35 8.36a.25.25 0 0 1-.48 0L9.24 2.18a.25.25 0 0 0-.48 0l-2.35 8.36A2 2 0 0 1 4.49 12H2" />
                </svg>
            );
            default: return (
                <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24">
                    <path d="M0 0h24v24H0z" fill="none" />
                    <path fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 8h4m-2 13v-9m0-4V3m5 13h4m-2-4V3m0 18v-5M3 14h4m-2-4V3m0 18v-7" />
                </svg>
            );
        }
    };

    return (
        <div className="serviceCard">
            <div className="serviceCard__body">
                <div className="serviceCard__header">
                    <div className="serviceCard__icon">
                        {getIcon(service.iconName)}
                    </div>
                    <span className="serviceCard__num">SYS.SRV_0{index + 1}</span>
                </div>

                <h3>{service.title}</h3>
                <p>{service.description}</p>

                <ul className="serviceCard__deliverables">
                    {service.deliverables.map((item, i) => (
                        <li key={i}>{item}</li>
                    ))}
                </ul>
            </div>

            <div className="serviceCard__footer">
                <Button to="/contact" variant="secondary" fullWidth icon={
                    <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24">
                        <path d="M0 0h24v24H0z" fill="none" />
                        <path fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 12h14m-7-7l7 7l-7 7" />
                    </svg>
                }>
                    {service.ctaText || 'INQUIRE SERVICE'}
                </Button>
            </div>
        </div>
    );
}

export default ServiceCard;