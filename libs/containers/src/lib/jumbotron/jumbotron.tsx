import {
    Jumbotron,
    JumbotronContainer,
    JumbotronImage,
    JumbotronPane,
    JumbotronSubTitle,
    JumbotronTitle
} from '@libs/component'
import { jumboData } from '@libs/fixtures'

export function MainJumbotron() {
    return (
        <JumbotronContainer>
            {jumboData.map((item) => (
                <Jumbotron key={item.id} direction={item.direction}>
                    <JumbotronPane>
                        <JumbotronTitle>{item.title}</JumbotronTitle>
                        <JumbotronSubTitle>{item.subTitle}</JumbotronSubTitle>
                    </JumbotronPane>
                    <JumbotronPane>
                        <JumbotronImage src={item.image} alt={item.alt} />
                    </JumbotronPane>
                </Jumbotron>
            ))}
        </JumbotronContainer>
    )
}
