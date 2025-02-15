import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Tag from './Tag';
import { CardHeader } from '@mui/material';
import { TagColor } from '../types/TagColor';
import { Project } from '../components/Projects';
interface Tag {
    name: string;
    color: TagColor;
}

export default function ImageCard({ image, mediaType, title, tags, description }: Project) {
    return (
        <Card sx={{ maxWidth: 345 }} elevation={0}>
            <CardHeader
                title={title}
                subheader={<>
                    {tags.map((tag, index) => (
                        <Tag key={index} name={tag.name} color={tag.color} />
                    ))}
                </>}
            />
            <CardMedia
                component={mediaType}
                src={image}
                width="300"
                controls={mediaType === 'video'}
            />
            <CardContent>
                <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                    {description}
                </Typography>
            </CardContent>
            <CardActions>
                <Button size="small">Share</Button>
            </CardActions>
        </Card>
    );
}