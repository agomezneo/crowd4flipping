import { MdOutlineAccountCircle } from "react-icons/md";
import { GiTeamIdea } from "react-icons/gi";
import { TbMapSearch } from "react-icons/tb";

export const linksContent = [
    {
        span: 'Programa de transparencia',
        url: '/transparencia',
        icon: <TbMapSearch />
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
