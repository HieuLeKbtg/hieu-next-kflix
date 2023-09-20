import styled from 'styled-components'

/* eslint-disable-next-line */
export interface LibsComponentProps {}

const StyledLibsComponent = styled.div`
    color: pink;
`

export function LibsComponent(props: LibsComponentProps) {
    return (
        <StyledLibsComponent>
            <h1>Welcome to LibsComponent!</h1>
        </StyledLibsComponent>
    )
}

export default LibsComponent
