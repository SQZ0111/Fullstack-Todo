import { AppHeaderIconsBox } from "../BoxComponents/AppHeaderIconsBox";
import { BoldAppHeader } from "../HeadingComponents/BoldAppHeader";
import { IconsStacked } from "../IconsComponents/IconsStacked";
import { TodoContentContainer } from "../ContainerComponents/TodoContentContainer";

export function TodoAppHeader() {
    return(
        <TodoContentContainer contentFor="vertical">
            <AppHeaderIconsBox content={<IconsStacked/>}/>
            <BoldAppHeader text={"Punch the card"} fontSizeHeader={"sm"}/>
        </TodoContentContainer>
    )
}