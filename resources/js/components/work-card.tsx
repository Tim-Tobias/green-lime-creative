import { cn } from '@/lib/utils';
import { motion } from 'framer-motion';
import * as React from 'react';

interface WorkCardProps {
    title: string;
    description: string;
    image?: string;
    className?: string;
}

export function WorkCard({ title, description, image, className }: WorkCardProps) {
    const [isHovered, setIsHovered] = React.useState(false);
    const [isLoaded, setIsLoaded] = React.useState(false);

    return (
        <motion.div
            className={cn('group relative overflow-hidden rounded-lg bg-transparent backdrop-blur-sm transition-all duration-300', className)}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            whileHover={{
                scale: 1.02,
                y: -5,
            }}
            transition={{ duration: 0.3, ease: 'easeOut' }}
        >
            {/* Image Container */}
            <div className="relative overflow-hidden bg-gray-100/20">
                {image ? (
                    <>
                        <div className="aspect-[4/5] h-full w-full">
                            <img
                                data-cursor-following="false"
                                src={image}
                                alt={title}
                                className={cn(
                                    'h-full w-full object-cover transition-all duration-500',
                                    isLoaded ? 'opacity-100' : 'opacity-0',
                                    isHovered ? 'scale-110' : 'scale-100',
                                )}
                                onLoad={() => setIsLoaded(true)}
                                loading="lazy"
                            />
                        </div>

                        {/* Loading skeleton */}
                        {!isLoaded && <div className="absolute inset-0 animate-pulse bg-gray-300/30" />}
                    </>
                ) : (
                    <div className="flex h-full w-full items-center justify-center border-2 border-dashed border-gray-300/50 bg-gray-100/10">
                        <div className="text-center">
                            <div className="mb-2 text-4xl text-gray-400/70">📷</div>
                            <span className="text-sm font-medium text-gray-500/70">{title}</span>
                        </div>
                    </div>
                )}
            </div>

            {/* Content */}
            <motion.div
                className="w-full py-6 backdrop-blur-sm md:w-[80%]"
                initial={{ y: 10, opacity: 0.8 }}
                animate={{
                    y: isHovered ? 0 : 10,
                    opacity: isHovered ? 1 : 0.8,
                }}
                transition={{ duration: 0.3 }}
            >
                <h3 className="mb-2 text-lg font-bold text-[#242422] transition-colors duration-300 group-hover:text-[#096260]">{title}</h3>
                <p className="line-clamp-3 text-sm leading-relaxed text-gray-600">{description}</p>

                {/* Action indicator */}
                <motion.button
                    className="mt-4 flex cursor-pointer items-center text-sm font-medium text-[#096260]"
                    initial={{ x: -10, opacity: 0 }}
                    animate={{
                        x: isHovered ? 0 : -10,
                        opacity: isHovered ? 1 : 0,
                    }}
                    transition={{ duration: 0.3, delay: 0.1 }}
                >
                    <span>View Project</span>
                    <motion.span className="ml-2" animate={{ x: isHovered ? 5 : 0 }} transition={{ duration: 0.3 }}>
                        →
                    </motion.span>
                </motion.button>
            </motion.div>
        </motion.div>
    );
}
