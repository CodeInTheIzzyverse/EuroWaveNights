import type { Equipment } from '@/types/equipment';
import './EquipmentCard.scss';

interface EquipmentCardProps {
    equipment: Equipment;
}

const EquipmentCard = ({ equipment }: EquipmentCardProps) => {
    const getIcon = (iconName?: string) => {
        switch (iconName) {
            case 'Cpu': return (
                <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24">
                    <path d="M0 0h24v24H0z" fill="none" />
                    <g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2">
                        <path d="M12 20v2m0-20v2m5 16v2m0-20v2M2 12h2m-2 5h2M2 7h2m16 5h2m-2 5h2M20 7h2M7 20v2M7 2v2" />
                        <rect width="16" height="16" x="4" y="4" rx="2" />
                        <rect width="8" height="8" x="8" y="8" rx="1" />
                    </g>
                </svg>
            );
            case 'HardDrive': return (
                <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24">
                    <path d="M0 0h24v24H0z" fill="none" />
                    <path fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 16h.01m-7.798-4.423a2 2 0 0 0-.212.896V18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-5.527a2 2 0 0 0-.212-.896L18.55 5.11A2 2 0 0 0 16.76 4H7.24a2 2 0 0 0-1.79 1.11zm19.734.436H2.054M6 16h.01" />
                </svg>
            );
            case 'Server': return (
                <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24">
                    <path d="M0 0h24v24H0z" fill="none" />
                    <g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2">
                        <rect width="20" height="8" x="2" y="2" rx="2" ry="2" />
                        <rect width="20" height="8" x="2" y="14" rx="2" ry="2" />
                        <path d="M6 6h.01M6 18h.01" />
                    </g>
                </svg>
            );
            case 'Grid': return (
                <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24">
                    <path d="M0 0h24v24H0z" fill="none" />
                    <g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2">
                        <path d="M12 3v18m-9-9h18" />
                        <rect width="18" height="18" x="3" y="3" rx="2" />
                    </g>
                </svg>
            );
            case 'Volume2': return (
                <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24">
                    <path d="M0 0h24v24H0z" fill="none" />
                    <path fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M11 4.702a.705.705 0 0 0-1.203-.498L6.413 7.587A1.4 1.4 0 0 1 5.416 8H3a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h2.416a1.4 1.4 0 0 1 .997.413l3.383 3.384A.705.705 0 0 0 11 19.298zM16 9a5 5 0 0 1 0 6m3.364 3.364a9 9 0 0 0 0-12.728" />
                </svg>
            );
            case 'Sliders': return (
                <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24">
                    <path d="M0 0h24v24H0z" fill="none" />
                    <path fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 8h4m-2 13v-9m0-4V3m5 13h4m-2-4V3m0 18v-5M3 14h4m-2-4V3m0 18v-7" />
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
            case 'Feather': return (
                <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24">
                    <path d="M0 0h24v24H0z" fill="none" />
                    <path fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14.086 18.412A2 2 0 0 1 12.67 19H5v-7.672a2 2 0 0 1 .586-1.414L11.75 3.75a6 6 0 1 1 8.49 8.49zM16 8L2 22m15.488-7H9" />
                </svg>
            );
            default: return (
                <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24">
                    <path d="M0 0h24v24H0z" fill="none" />
                    <g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2">
                        <path d="M12 20v2m0-20v2m5 16v2m0-20v2M2 12h2m-2 5h2M2 7h2m16 5h2m-2 5h2M20 7h2M7 20v2M7 2v2" />
                        <rect width="16" height="16" x="4" y="4" rx="2" />
                        <rect width="8" height="8" x="8" y="8" rx="1" />
                    </g>
                </svg>
            );
        }
    };

    return (
        <div className='equipmentCard'>
            <div className="equipmentCard__header">
                <span className="equipmentCard__header__sys">SYS / {equipment.category.toUpperCase()}</span>
                <span className="equipmentCard__header__status">
                    <span className="signal-indicator" style={{ width: '6px', height: '6px' }} />
                    {equipment.status}
                </span>
            </div>

            <div className="equipmentCard__main">
                <div className="equipmentCard__main__icon">
                    {getIcon(equipment.iconName)}
                </div>

                <div className="equipmentCard__main__group">
                    <h4>{equipment.name}</h4>
                    <span>{equipment.type}</span>
                </div>
            </div>

            <p className="equipmentCard__desc">{equipment.description}</p>
        </div>
    )
}

export default EquipmentCard;
