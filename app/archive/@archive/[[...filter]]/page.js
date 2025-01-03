import NewsList from "@/components/news-list";
import { getAvailableNewsYears, getNewsForYear } from "@/lib/news";
import Link from "next/link";


export default function YearSelector({params}) {
    const filter = params.filter;
    
    // const selectedYear = filter
    const links = getAvailableNewsYears();
    return <header id="archive-header">
    <nav>
        <ul>
                {links.map(link => <li key={link}>
                    <Link href={`/archive/${link}`}>{link}</Link>
                </li>)}
        </ul>
    </nav>
</header>;
    // const News = getNewsForYear(NewsYear);
    // return <NewsList news={News}/>
    
}