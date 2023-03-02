
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faBuilding } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { ExternalLink } from "../../../../components/ExternalLink";
import { ProfileContainer, ProfileDetails, ProfilePicture } from "./styles";

export function Profile(){
    return (
        <ProfileContainer>
            <ProfilePicture src="https://github.com/emillykamile.png"/>

            <ProfileDetails>
                <header>
                    <h1>Emilly Kamile</h1>

                    <ExternalLink text="Github" href="https://github.com/emillykamile" target="_blank"/>
                </header>
                <p>
                Pertinaz, incansável e apaixonada naquilo que faço. Bilíngue em construção, empreendedora, autodidata,
                amante da leitura, colecionadora de livros, e entusiasta do conhecimento, sou completamente apaixonada 
                por tecnologia.
                </p>
                <ul>
                    <li>
                        <FontAwesomeIcon icon={faGithub} />
                        emillykamile
                    </li>
                    <li>
                        <FontAwesomeIcon icon={faBuilding} />
                        Freelancer
                    </li>
                </ul>
            </ProfileDetails>        
        </ProfileContainer>
    )
}