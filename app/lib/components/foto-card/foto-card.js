'use client';
import * as React from 'react';
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import { red } from '@mui/material/colors';
import { CardActions, Icon } from '@mui/material';
import { CommentOutlined } from '@mui/icons-material';
import Box from '@mui/material/Box';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import SkipPreviousIcon from '@mui/icons-material/SkipPrevious';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import SkipNextIcon from '@mui/icons-material/SkipNext';
import { useTheme } from '@mui/material/styles';


export default function FotoCard({ elem }) {
    return (
        <Card sx={{ maxWidth: 500 }} key={elem.id}>
            <div className='hidden md:block'>
                <CardHeader
                    avatar={
                        <Avatar sx={{ bgcolor: red[500] }} aria-label="foto" src={elem.thumbnailUrl} >
                            R
                        </Avatar>
                    }
                    title={elem.title}
                />
            </div>

            <CardMedia
                aspectratio="1/1"
                component="img"
                // height="194"
                image={elem.url}
                alt={elem.title}
                title={elem.title}
            />
            {/* <CardActions disableSpacing className='hidden md:block'>
                <IconButton aria-label="Adicionar comentáro">
                    <Icon as={CommentOutlined} />
                </IconButton>
            </CardActions> */}

        </Card >
    );
}