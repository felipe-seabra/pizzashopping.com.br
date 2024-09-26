'use client'

import CookieConsent from 'react-cookie-consent'

const COOKIE_STYLE: React.CSSProperties = {
  background: '#101010',
  textAlign: 'left',
  fontSize: '16px',
  padding: '20px',
}

export function CookieConsentComponent(): JSX.Element {
  return (
    <div>
      <CookieConsent
        cookieName="pizza-shopping-cookie-consent"
        style={COOKIE_STYLE}
        buttonText="Aceitar"
        expires={30}
        buttonClasses="cookie-btn"
      >
        &#34;Este site utiliza cookies para seu adequado funcionamento,
        análises, personalização e publicidade. Ao continuar navegando neste
        site você declara estar ciente destas condições.&#34;
      </CookieConsent>
    </div>
  )
}
