/* eslint-disable no-useless-concat */
/* eslint-disable jsx-a11y/anchor-has-content */
/* eslint-disable jsx-a11y/anchor-is-valid */
import { FaGithub } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import { FaLinkedin, FaFacebook  } from "react-icons/fa";
import { BsFillPersonVcardFill } from "react-icons/bs";

const SocialLink = () => {
    const links = [
        {
            id: 1,
            child:(
                <>
                LinkedIn<FaLinkedin size={30}/>
                </>
            ),
            href:'https://linkedin.com',
           style: 'rounded-tr-md'
        },
        {
            id: 2,
            child:(
                <>
                Github<FaGithub size={30}/>
                </>
            ),
            href:'https://github.com/Rajib4375',
           style: 'rounded-tr-md'
        },
        {
            id: 3,
            child:(
                <>
                Email<MdEmail size={30}/>
                </>
            ),
            href:'rajibhossain10498@gmail.com',
           style: 'rounded-tr-md'
        },
        {
            id: 4,
            child:(
                <>
                Resume<BsFillPersonVcardFill size={30}/>
                </>
            ),
            href:'../../public/Resume.odt',
           style: 'rounded-tr-md',
           download: true
        },
        {
            id: 5,
            child:(
                <>
                Facebook<FaFacebook size={30}/>
                </>
            ),
            href:'https://www.facebook.com/profile.php?id=100009013222770',
           style: 'rounded-br-md',
           download: true
        }
    ]
    return (
        <div className="hidden lg:flex flex-col top-[35%] left-0 fixed">
            <ul>
                {
                    links.map((link )=>(
                        <li key={link.id} className={"flex justify-between items-center w-40 h-14 px-4 ml-[-100px] hover:ml-[-10px] hover:rounded-md duration-300 bg-gray-500" + "" + link.style}>
                        <a href={link.href} className="flex justify-between items-center w-full text-white"
                        download={link.download} 
                        >
                        {link.child}
                        </a>
                        </li>
                    ))
                }
                
            </ul>
        </div>
    );
};

export default SocialLink;