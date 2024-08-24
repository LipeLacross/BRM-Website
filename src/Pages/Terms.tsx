import React from 'react';
import '../styles/Terms.sass';


const Terms: React.FC = () => {
    return (
        <div className="terms-page">
            <h1>Termos de Serviço</h1>
            <section>
                <h2>1. Aceitação dos Termos</h2>
                <p>
                    Ao acessar e utilizar o SuaTmb, você concorda em cumprir e estar sujeito aos termos e condições descritos neste documento. Se você não concordar com qualquer parte dos termos, não utilize o site.
                </p>
            </section>
            <section>
                <h2>2. Modificações dos Termos</h2>
                <p>
                    O SuaTmb reserva-se o direito de modificar estes Termos de Serviço a qualquer momento. Quaisquer alterações serão publicadas nesta página e, se aplicável, você será notificado por e-mail. É sua responsabilidade revisar periodicamente estes termos.
                </p>
            </section>
            <section>
                <h2>3. Uso Aceitável</h2>
                <p>
                    Você concorda em utilizar o site apenas para fins legais e de acordo com as leis aplicáveis. É proibido utilizar o site de maneira que possa danificar, desativar, sobrecarregar ou prejudicar o site ou interferir na utilização de outros usuários.
                </p>
            </section>
            <section>
                <h2>4. Propriedade Intelectual</h2>
                <p>
                    Todo o conteúdo e materiais disponíveis no SuaTmb, incluindo textos, gráficos, logotipos e imagens, são de propriedade do SuaTmb ou de seus licenciadores e são protegidos por leis de propriedade intelectual.
                </p>
            </section>
            <section>
                <h2>5. Limitação de Responsabilidade</h2>
                <p>
                    O SuaTmb não será responsável por quaisquer danos diretos, indiretos, incidentais ou consequenciais decorrentes do uso ou incapacidade de uso do site. O site é fornecido "como está" e "conforme disponível".
                </p>
            </section>
            <section>
                <h2>6. Contato</h2>
                <p>
                    Se você tiver perguntas sobre estes Termos de Serviço, entre em contato conosco pelo e-mail <a href="mailto:feliperioscross.b@gmail.com">feliperioscross.b@gmail.com</a>.
                </p>
            </section>
        </div>
    );
};

export default Terms;