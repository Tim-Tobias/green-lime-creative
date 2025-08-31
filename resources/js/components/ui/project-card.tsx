import { ScrollReveal } from "../animations";

interface ProjectCardProps {
    title: string;
    description: string;
    imageUrl?: string;
    delay?: number;
}

const ProjectCard = ({ title, description, imageUrl, delay = 0 }: ProjectCardProps) => {
    return (
        <ScrollReveal delay={delay}>
            <div className="group cursor-pointer">
                {/* Image Container */}
                <div className="mb-6 aspect-[3/4] overflow-hidden bg-gray-300">
                    {imageUrl ? (
                        <img 
                            src={imageUrl} 
                            alt={title}
                            className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                        />
                    ) : (
                        <div className="flex h-full w-full items-center justify-center bg-gray-300">
                            <span className="text-lg font-medium text-gray-600">PHOTOS</span>
                        </div>
                    )}
                </div>
                
                {/* Content */}
                <div className="space-y-3">
                    <h3 className="text-lg font-bold uppercase tracking-wide text-black">
                        {title}
                    </h3>
                    <p className="text-sm leading-relaxed text-gray-600 md:w-[80%]">
                        {description}
                    </p>
                </div>
            </div>
        </ScrollReveal>
    );
};

export default ProjectCard;