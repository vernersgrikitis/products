import Image from 'next/image'

interface PaginationButtonProps {
    onClick?: () => void;
    disabled?: boolean;
    imageSrc?: string;
    imageSize?: { width?: number; height?: number };
    imageAlt?: string;
    className?: string;
    classNameForImage?: string;
}

const PaginationButton: React.FC<PaginationButtonProps> = ({ 
    onClick, disabled, imageSrc, imageAlt = '', imageSize, className, classNameForImage}) => {
    return (
        <button onClick={onClick} disabled={disabled} className={className}>
            {imageSrc && imageSize ? (
                <Image 
                    src={imageSrc} 
                    alt={imageAlt} 
                    width={imageSize.width} 
                    height={imageSize.height}
                    className={classNameForImage}
                />
            ) : null}   
        </button>
    )
}

export default PaginationButton