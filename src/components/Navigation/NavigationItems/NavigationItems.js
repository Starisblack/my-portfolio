import './NavigationItems.css';
import NavigationItem from './NavigationItem/NavigationItem';

const navigationItems = () => (
    <ul className="NavigationItems">
        <NavigationItem link="/#aboutMe">About Me</NavigationItem>
        <NavigationItem link="/#services">Services</NavigationItem>
        <NavigationItem link="/#portfolio" >Porfolio</NavigationItem>
        <NavigationItem class="contact" link="/#contact">Contact Me</NavigationItem>
    </ul>
);

export default navigationItems;