'use client';
import * as React from 'react';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import Avatar from '@mui/material/Avatar';
import { red } from '@mui/material/colors';

export default function FotoCard({ elem }) {
    return (
        <Card sx={{ maxWidth: 500 }} key={elem.id}>
            <div className='hidden md:block'>
                <CardHeader
                    style={{ backgroundColor: "#F0F0F0" }}
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
        </Card >
    );
}