import { footer_wrapper,footer_container,item_made,item_container,item } from '../../../../../styles/components_style/footer.module.css';
import { STRINGS } from '../../constants/strings';
import { IMAGES } from '../../constants/images';

function Footer(){
    return (
        <React.Fragment>
            <footer className={footer_wrapper}>
                <div className={footer_container}>
                    <div className={item_made}>
                        <a href="https://nextjs.org/" target="_blank" rel="noopener noreferrer">
                        {STRINGS.BUILT_WITH_NEXTJS}
                        </a>
                    </div>
                    <div className={item_container}>
                        <a href="https://github.com/andreimelo" target="_blank" rel="noopener noreferrer">
                            <img src={IMAGES.GITHUB} className={item} alt="githubLogo" />
                        </a>
                        <a href="https://www.linkedin.com/in/andrei-melo-4a4635191/" target="_blank" rel="noopener noreferrer">
                            <img src={IMAGES.LINKED_IN} className={item} alt="linkedInLogo"/>
                        </a>
                        <a href="https://twitter.com/imdreimelo" target="_blank" rel="noopener noreferrer">
                            <img src={IMAGES.TWITTER} className={item} alt="twitterLogo"/>
                        </a>
                    </div>
                </div>
            </footer>
        </React.Fragment>
    )
}

export default Footer;
