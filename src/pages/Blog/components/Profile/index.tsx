
import { ExternalLink } from "../../../../components/ExternalLink";
import { ProfileContainer, ProfileDetails, ProfilePicture } from "./styles";

export function Profile(){
    return (
        <ProfileContainer>
            <ProfilePicture src="https://github.com/emillykamile.png"/>

            <ProfileDetails>
                <header>
                    <h1>Emilly Kamile</h1>

                    <ExternalLink text="Github" href="#"/>
                </header>
            </ProfileDetails>        
        </ProfileContainer>
    )
}