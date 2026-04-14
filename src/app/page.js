import Banner from '@/components/banner/Banner';
import Card from '@/components/card/Card';
import HomePage from './home/page';
import Footer from '@/components/footer/Footer';



const page = ({ children}) => {
    return (
        <div>
            <Banner/>
            <Card/>
            <main>
                <HomePage/>
            </main>
            
        </div>
    );
};

export default page;
