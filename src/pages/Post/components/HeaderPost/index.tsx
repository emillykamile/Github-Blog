import { faChevronLeft } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { ExternalLink } from "../../../../components/ExternalLink";
import { PostHeaderContainer } from "./styles";

export function PostHeader() {
    return (
        <PostHeaderContainer>
                <header>
                    <ExternalLink
                    as="button"
                    href="#"
                    icon={<FontAwesomeIcon icon={faChevronLeft} />}
                    text="Voltar"
                    variant="iconLeft"
                    />
                    <ExternalLink
                    text="Ver no Github"
                    href="#"
                    target="_blank"
                    />
                </header>
        </PostHeaderContainer>
    )
}