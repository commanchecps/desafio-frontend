'use client';
import { useEffect, useState } from 'react';
import Pagination from '@mui/material/Pagination';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import Header from '../lib/components/header/header';
import Loading from '../lib/components/loading/loading';
import { Typography } from '@mui/material';
import InfoIcon from '@mui/icons-material/Info';
import ListaImagens from '../lib/components/lista-fotos/lista-fotos';
import Footer from '../lib/components/footer/footer';

export default function FotosPaginadas() {
    const [fotos, setFotos] = useState([]);
    const [page, setPage] = useState(1);
    const [order, setOrder] = useState('id');
    const [loading, setLoading] = useState(true);
    const amount = 48;
    const baseURL = 'https://jsonplaceholder.typicode.com/'
    var url = baseURL + `photos?_limit=${amount}&_page=${page}&_sort=${order}`;

    useEffect(() => {
        setLoading(true);
        fetch(url)
            .then(response => response.json())
            .then(data => {
                setFotos(data);
                setLoading(false);
            })
            .catch(err => {
                console.error('Failed to fetch fotos', err);
                setLoading(false);
            });
    }, [page, order]);

    const handleChangePage = (event, newPage) => {
        setPage(newPage);
    };
    const handleChangeOrder = (event) => {
        setPage(1);
        setOrder(event.target.value);
    };

    return (

        <div>
            <Header />
            <div className="flex flex-wrap items-center justify-between px-4 centralizado">
                <div className="my-3">
                    <Typography variant="h4" component="h1" gutterBottom> Lista de Fotos </Typography>
                </div>
                <div className="my-3 w-auto ordenacao">
                    <FormControl style={{ width: 220 }} >
                        <InputLabel id="selecao-filtro">Ordenação</InputLabel>
                        <Select
                            size="small"
                            labelId="selecao-filtro"
                            id="order"
                            value={order}
                            label="Ordem"
                            onChange={handleChangeOrder}
                        >
                            <MenuItem value='title'>Título</MenuItem>
                            <MenuItem value='id'>ID</MenuItem>
                        </Select>
                    </FormControl>
                </div>
            </div>

            {(loading) ? <Loading /> : ''}
            {/* {
                fotos.length > 0 ? ( */}







            <ListaImagens dados={fotos} />


            <Footer>
                <div className="my-3 flex justify-center md:w-auto">
                    <Pagination count={Math.round(5000 / amount) + 1} color="primary" page={page} onChange={handleChangePage} />
                </div>
            </Footer>

        </div >
    );
}