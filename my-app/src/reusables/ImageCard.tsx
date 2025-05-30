import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import Tag from './Tag';
import { CardHeader } from '@mui/material';
import { Project } from '../components/Projects';
import { useState } from 'react';
import IconButton from '@mui/material/IconButton';
import ChevronLeft from '@mui/icons-material/ChevronLeft';
import ChevronRight from '@mui/icons-material/ChevronRight';

export default function ImageCard({ media, mediaType, mediaLink, title, tags, description }: Project) {
    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    const handleNext = () => {
        setCurrentImageIndex((prev) => (prev + 1) % media.length);
    };

    const handlePrevious = () => {
        setCurrentImageIndex((prev) => (prev - 1 + media.length) % media.length);
    };
    
    return (
        <Card sx={{ maxWidth: 400 }} elevation={0}>
            <CardHeader
                sx={{ padding: 0 }}
                title={<Typography variant="h6" sx={{ lineHeight: 1.2 }}>{title}</Typography>}
                subheader={<>
                    {tags.map((tag, index) => (
                        <Tag key={index} name={tag.name} category={tag.category} />
                    ))}
                </>}
            />
            <div style={{ position: 'relative' }}>
                {mediaLink ? (
                <div style={{ padding: '15px 0' }}>
                    <a href={mediaLink} target="_blank" rel="noopener noreferrer">
                        <CardMedia
                            component={mediaType}
                            src={media[currentImageIndex]}
                            // width="300"
                            // height="250"
                            controls={mediaType === 'video'}
                        />
                    </a>
                </div>
                ) : (
                <div style={{ padding: '15px 0' }}>
                    <CardMedia
                        component={mediaType}
                        src={media[currentImageIndex]}
                        // width="300"
                        // height="250"
                        controls={mediaType === 'video'}
                    />
                </div>)}
                {media.length > 1 && (
                    <>
                        <IconButton 
                            onClick={handlePrevious}
                            style={{ position: 'absolute', left: 0, top: '50%', transform: 'translateY(-50%)' }}
                        >
                            <ChevronLeft />
                        </IconButton>
                        <IconButton 
                            onClick={handleNext}
                            style={{ position: 'absolute', right: 0, top: '50%', transform: 'translateY(-50%)' }}
                        >
                            <ChevronRight />
                        </IconButton>
                    </>
                )}
            </div>
            <CardContent style={{ padding: 0 }}>
                <Typography sx={{ color: 'text.secondary', textAlign: 'justify' }}>
                    {description}
                </Typography>
            </CardContent>
        </Card>
    );
}