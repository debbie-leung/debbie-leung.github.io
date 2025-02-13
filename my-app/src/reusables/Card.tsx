import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Tag from './Tag';
import { CardHeader } from '@mui/material';

interface ImageCardProps {
    image: string;
    title: string;
    description: string;
}

export default function ImageCard({ image, title, description }: ImageCardProps) {
    return (
        <Card sx={{ maxWidth: 345 }} elevation={0}>
            <CardHeader
                title={title}
                subheader={<>
                    <Tag name="tool" color="tool" />
                    <Tag name="technology" color="technology" />
                    <Tag name="topic" color="topic" />
                </>}
            />
            <CardMedia
                component="img"
                alt="belize"
                height="200"
                image={image}
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