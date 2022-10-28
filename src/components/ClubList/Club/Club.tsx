import React, {useEffect, useState} from "react";

import { IClub } from "../../../types/Club";
import Link from "next/link";
import { useRouter } from "next/router";

interface Props {
    club: IClub;
}

export default function Club({club}: Props){

    const router = useRouter();
    const query = router.query;

    console.log(query);

    return <>

        <li className="relative">
            <Link href={{ pathname: `/clubs/${club.code}`}}>
                <a>
                    <strong className="text-lg">{club.name}</strong>
                </a>
            </Link>
            <br />
            
        </li>

        
    </>;
}
