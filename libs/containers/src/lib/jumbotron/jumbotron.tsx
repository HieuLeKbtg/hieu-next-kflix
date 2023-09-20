import React from 'react'
import { Jumbotron } from 'src/components'
import {
    JumbotronContainer,
    JumbotronImage,
    JumbotronPane,
    JumbotronSubTitle,
    JumbotronTitle
} from 'src/components/jumbotron'
import { jumboData } from 'src/fixtures'

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
