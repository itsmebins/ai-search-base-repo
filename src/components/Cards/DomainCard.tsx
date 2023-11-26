import Image from 'next/image'
import { Badge } from 'components/UI'
type Props = {
  name: string;
  desc: string;
  brand: string;
  seoD?: string[];
  logo: string;
  status: string;
  logoWidth?: number;
  logoHeight?: number;
  handleClick?: () => void
};

export const DomainCard: React.FC<Props> = ({ name, desc, brand, seoD, logo, logoWidth = 60, logoHeight = 60, handleClick, status
 }) => {
  /* const getSEODomains = () => {
    if (seoD && seoD.length > 0) {
      return seoD.map((s, i) => {
        return <a href={`https://${s}`} className="text-secondary font-extrabold hover:text-primary/75 cursor-pointer" target="_blank" key={i}>{s} </a>
      })
    }
    return ""
  }
  onClick={(e) => {
      e.stopPropagation();
      e.preventDefault();
      handleClick && handleClick()
    }}
  */
  return (
    <div className="flex flex-col  rounded-xl border border-blue-gray-50 bg-white p-2 max-h-[450px] min-h-[340px] w-full overflow-hidden" >
      <div className="flex flex-row  justify-start border-b border-blue-gray-50 p-1 w-full">
        <div className="flex items-center justify-center max-w-[100px] max-h-[60px] min-w-[60px] min-h-[60px]">
          <div className='flex items-center justify-center'>
            <Image src={logo} alt={`logo-${name}`} width={logoWidth} height={logoHeight}></Image>
          </div>

        </div>
        <div className='flex items-center justify-center ml-2'>
          <h2 className="ml-1"><a href={`https://${seoD?.[0] || brand}`} className="text-sm md:text-base text-secondary font-extrabold hover:text-primary/75 cursor-pointer" target="_blank" onClick={(e) => {
            e.stopPropagation();
          }}>{seoD?.[0] || brand} </a></h2>
        </div>
        <div className='flex items-center justify-center ml-2'>
         <Badge label={status} mode={status === 'MVP Ready' ? 'success' : 'pink'}/>
        </div>
      </div>
      <div className="flex flex-col justify-start p-1 mt-2 w-full">
        {
          /*
 <div>
          <span className="font-semibold mr-1">
            SEO:
          </span>
          {getSEODomains()}
        </div>

          */
        }

        <div>
          <span className="font-semibold">Brand:</span> <span className="text-secondary font-extrabold"><a href={`https://${brand}`} className="hover:text-primary/75 cursor-pointer" target="_blank" onClick={(e) => {
            e.stopPropagation();
          }}>{brand}</a></span>
        </div>
      </div>
      <div className="mt-1 overflow-x-hidden p-1 flex flex-col items-center justify-center">
        <p>{desc}</p>
      </div>
    </div>
  );
};
