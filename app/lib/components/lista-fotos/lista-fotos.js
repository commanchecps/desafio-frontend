"use client";
import * as React from "react";
import Box from "@mui/material/Box";
import ImageListItem, {
    imageListItemClasses
} from "@mui/material/ImageListItem";
import ImageListItemBar from "@mui/material/ImageListItemBar";
import IconButton from "@mui/material/IconButton";
import InfoIcon from "@mui/icons-material/Info";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { Link } from "@mui/material";

const theme = createTheme({
    breakpoints: {
        values: {
            mobile: 0,
            bigMobile: 350,
            tablet: 650,
            desktop: 900
        }
    }
});

export default function ListaImagens({ dados }) {
    return (
        <div className="p-4">
            <ThemeProvider theme={theme}>
                <Box
                    sx={{
                        display: "grid",
                        gridTemplateColumns: {
                            mobile: "repeat(2, 1fr)",
                            bigMobile: "repeat(3, 1fr)",
                            tablet: "repeat(4, 1fr)",
                            desktop: "repeat(8, 1fr)"
                        },
                        [`& .${imageListItemClasses.root}`]: {
                            display: "flex",
                            flexDirection: "column"
                        }
                    }}
                >
                    {dados.map((item) => (
                        <Link href={'/detalhes/' + item.id} key={item.id}>
                            <ImageListItem >
                                <img
                                    src={`${item.thumbnailUrl}?w=248&fit=crop&auto=format`}
                                    srcSet={`${item.thumbnailUrl}?w=248&fit=crop&auto=format&dpr=2 2x`}
                                    alt={item.title}
                                    loading="lazy"
                                />

                                <ImageListItemBar
                                    title={item.title}
                                    actionIcon={

                                        <IconButton
                                            sx={{ color: 'rgba(255, 255, 255, 0.54)' }}
                                            aria-label={`info about ${item.title}`}
                                        >
                                            <InfoIcon />
                                        </IconButton>

                                    }
                                />
                            </ImageListItem>
                        </Link>
                    ))}
                </Box>
            </ThemeProvider>
        </div>
    );
}