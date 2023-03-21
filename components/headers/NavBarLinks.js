import { MdOutlineAccountCircle } from "react-icons/md";
import { GiTeamIdea } from "react-icons/gi";
import { TbMapSearch, TbHomeLink } from "react-icons/tb";
import {BsBuildingFillCheck } from "react-icons/bs";

export const linksContent = [
    {
        span: 'Programa de transparencia',
        url: '/transparencia',
        icon: <TbMapSearch />
    },
    {
        span: 'Encontrar oportunidades',
        url: '/inversor',
        icon: <BsBuildingFillCheck />
    },
    {
        span: 'Ofrece una oportunidad',
        url: '/propietario',
        icon: <TbHomeLink />
    },
    {
        span: 'Quienes somos',
        url: '/sobre-nosotros',
        icon: <GiTeamIdea />
    },
    {
        span: 'Acceso',
        url: 'https://app.crowd4flipping.com',
        icon: <MdOutlineAccountCircle />
    },
]
