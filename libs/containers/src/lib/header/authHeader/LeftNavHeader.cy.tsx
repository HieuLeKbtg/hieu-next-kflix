import LeftNavHeader from './LeftNavHeader'

describe(LeftNavHeader.name, () => {
    it('renders', () => {
        cy.mount(<LeftNavHeader />)
    })

    //     <HeaderLink $active={pathname === '/series'} href='/series'>
    //     Series
    // </HeaderLink>
    // <HeaderLink $active={pathname === '/films'} href='films'>
    //     Films
    // </HeaderLink>
})
