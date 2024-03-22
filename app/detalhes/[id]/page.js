"use client";
import { useEffect, useState } from 'react';
import Loading from '../../lib/components/loading/loading';
import FotoCard from '@/app/lib/components/foto-card/foto-card';
import Header from '../../lib/components/header/header';
import ListaImagens from '@/app/lib/components/lista-fotos/lista-fotos';
import { Typography } from '@mui/material';

export default function DetalhesFotos({ params }) {


    if (!parseInt(params.id) && params.id != 'random') window.location.href = '/detalhes';
    params.id = (params.id == 'random') ? Math.floor(Math.random() * 500) : params.id;

    const [foto, setFoto] = useState({});
    const [fotos, setFotosAlbum] = useState([]);
    const [loading, setLoading] = useState(true);
    const baseURL = 'https://jsonplaceholder.typicode.com/'

    const amount = 24;
    var url = baseURL + `photos/${params.id}`;


    useEffect(() => {
        const fetchData = () => {
            fetch(url)
                .then(response => {
                    if (!response.ok) {
                        throw new Error('Network response was not ok');
                    }
                    return response.json();
                })
                .then(data => {
                    setFoto(data);
                    const urlAlbum = baseURL + `photos?albumId=${data.albumId}&_limit=${amount}`;
                    return fetch(urlAlbum);
                })
                .then(response => {
                    if (!response.ok) {
                        throw new Error('Network response was not ok');
                    }
                    return response.json();
                })
                .then(albumData => {
                    setFotosAlbum(albumData); // Define os dados da segunda requisição
                    setLoading(false);
                })
                .catch(error => {
                    console.error('Failed to fetch data:', error);
                    setLoading(false);
                    router.push('/detalhes');
                });
        };

        fetchData();
    }, []);

    return (
        <div >
            <Header />
            {(loading) ? <Loading /> : ''}
            {!loading && <div>
                <div className="my-3 px-4 ">
                    <Typography variant="h4" component="h1" gutterBottom> Detalhes da  Foto {foto.id}</Typography>
                </div>
                <div className="my-3 mb-8 px-4">
                    <FotoCard elem={foto} key={foto.id} />
                </div>

                <div className="my-3 px-4 mt-8">
                    <Typography variant="h4" component="h1" gutterBottom> Outras Fotos do Álbum {foto.albumId}</Typography>
                </div>
                {(fotos.length > 0) ? <ListaImagens dados={fotos} /> : ''}
            </div>
            }
        </div >
    );
}

