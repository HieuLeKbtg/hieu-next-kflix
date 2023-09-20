import React from 'react'
import {
    FooterBreak,
    FooterColumn,
    FooterContainer,
    FooterLink,
    FooterRow,
    FooterText,
    FooterTitle
} from 'src/components/footer'

export function MainFooter() {
    return (
        <FooterContainer>
            <FooterTitle>Questions? Contact us.</FooterTitle>
            <FooterBreak />
            <FooterRow>
                <FooterColumn>
                    <FooterLink href='#'>FAQ</FooterLink>
                    <FooterLink href='#'>Investor Relations</FooterLink>
                    <FooterLink href='#'>Ways to Watch</FooterLink>
                    <FooterLink href='#'>Corporate Information</FooterLink>
                    <FooterLink href='#'>Netflix Originals</FooterLink>
                </FooterColumn>

                <FooterColumn>
                    <FooterLink href='#'>Help Centre</FooterLink>
                    <FooterLink href='#'>Jobs</FooterLink>
                    <FooterLink href='#'>Terms of Use</FooterLink>
                    <FooterLink href='#'>Contact Us</FooterLink>
                </FooterColumn>

                <FooterColumn>
                    <FooterLink href='#'>Account</FooterLink>
                    <FooterLink href='#'>Redeem gift cards</FooterLink>
                    <FooterLink href='#'>Privacy</FooterLink>
                    <FooterLink href='#'>Speed Test</FooterLink>
                </FooterColumn>

                <FooterColumn>
                    <FooterLink href='#'>Media Centre</FooterLink>
                    <FooterLink href='#'>Buy gift cards</FooterLink>
                    <FooterLink href='#'>Cookie Preferences</FooterLink>
                    <FooterLink href='#'>Legal Notices</FooterLink>
                </FooterColumn>
            </FooterRow>
            <FooterBreak />
            <FooterText>Netflix United Kingdom</FooterText>
        </FooterContainer>
    )
}
