import type { Project } from '@/types/project';
import './ProjectCard.scss';

interface ProjectCardProps {
    project: Project;
}

const ProjectCard = ({ project }: ProjectCardProps) => {
    return (
        <div className="projectCard">
            <div>
                <div className="projectCard__header">
                    <span className="projectCard__header__cat">[ {project.category.toUpperCase()} ]</span>
                    {project.badge && <span className="projectCard__header__badge">{project.badge}</span>}
                </div>

                <h3>{project.title}</h3>
                <p>{project.description}</p>

                <div className="projectCard__tools">
                    {project.tools.map((t) => (
                        <span key={t} className="projectCard__tools__chip tag-chip">
                            <svg style={{ marginRight: '4px', width: '10px', height: '10px' }} xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24">
                                <path d="M0 0h24v24H0z" fill="none" />
                                <g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2">
                                    <path d="M12 20v2m0-20v2m5 16v2m0-20v2M2 12h2m-2 5h2M2 7h2m16 5h2m-2 5h2M20 7h2M7 20v2M7 2v2" />
                                    <rect width="16" height="16" x="4" y="4" rx="2" />
                                    <rect width="8" height="8" x="8" y="8" rx="1" />
                                </g>
                            </svg>
                            {t}
                        </span>
                    ))}
                </div>
            </div>

            <div className="projectCard__footer">
                <div>
                    <span>CLIENT: </span>
                    <span className="projectCard__footer__client">{project.client}</span>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                    {project.status === 'COMPLETED' ? (
                        <span className="status-badge status-active">
                            <svg style={{ width: '10px', height: '10px' }} xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24">
                                <path d="M0 0h24v24H0z" fill="none" />
                                <g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2">
                                    <circle cx="12" cy="12" r="10" />
                                    <path d="m9 12l2 2l4-4" />
                                </g>
                            </svg>

                            {project.status} ({project.year})
                        </span>
                    ) : (
                        <span className="status-badge status-info">
                            <svg style={{ width: '10px', height: '10px' }} xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24">
                                <path d="M0 0h24v24H0z" fill="none" />
                                <g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2">
                                    <circle cx="12" cy="12" r="10" />
                                    <path d="M12 6v6l4 2" />
                                </g>
                            </svg>

                            {project.status} ({project.year})
                        </span>
                    )}
                </div>
            </div>
        </div>
    );
}

export default ProjectCard;