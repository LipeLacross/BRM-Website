import React from 'react';
import '../styles/Privacy.sass';


const Privacy: React.FC = () => {
    return (
        <div className="privacy-page">
            <h1>Política de Privacidade</h1>
            <section>
                <h2>1. Introdução</h2>
                <p>
                    A sua privacidade é importante para nós. Esta Política de Privacidade explica como coletamos, usamos, armazenamos e protegemos suas informações pessoais quando você usa o SuaTmb.
                </p>
            </section>
            <section>
                <h2>2. Coleta de Informações</h2>
                <p>
                    Coletamos informações pessoais que você nos fornece diretamente, como nome e e-mail, quando você se registra ou entra em contato conosco. Também coletamos informações automaticamente, como dados de navegação e uso do site.
                </p>
            </section>
            <section>
                <h2>3. Uso das Informações</h2>
                <p>
                    Usamos suas informações para fornecer e melhorar nossos serviços, personalizar sua experiência, e para nos comunicarmos com você sobre atualizações e ofertas. Não compartilhamos suas informações com terceiros sem seu consentimento, exceto quando exigido por lei.
                </p>
            </section>
            <section>
                <h2>4. Segurança das Informações</h2>
                <p>
                    Implementamos medidas de segurança para proteger suas informações pessoais contra acesso não autorizado, alteração, divulgação ou destruição. No entanto, nenhum método de transmissão pela Internet é 100% seguro.
                </p>
            </section>
            <section>
                <h2>5. Seus Direitos</h2>
                <p>
                    Você tem o direito de acessar, corrigir ou excluir suas informações pessoais. Para exercer esses direitos, entre em contato conosco pelo e-mail <a href="mailto:feliperioscross.b@gmail.com">feliperioscross.b@gmail.com</a>.
                </p>
            </section>
            <section>
                <h2>6. Alterações nesta Política</h2>
                <p>
                    Podemos atualizar esta Política de Privacidade periodicamente. Recomendamos que você revise esta página regularmente para estar ciente de quaisquer alterações.
                </p>
            </section>
        </div>
    );
};

export default Privacy;