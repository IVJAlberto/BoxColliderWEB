import { ParallaxBanner } from 'react-scroll-parallax'

export const ParallaxImage = ({secDiv, cnParallax, cnDiv, id,cnImage, imgURL, speed}) => {
  return (
    <section className={`${secDiv}`}>
        <ParallaxBanner 
            className={`${cnParallax}`}
            layers={[
                {
                  children:
                    <div className={`${cnDiv}`} id={`${id}`}>	
                      <img className={`${cnImage}`} src={` ${imgURL}`} alt={`${id}`} />
                    </div>,
                    expanded: false,
                    speed: speed,
                    scale: [1, 1],
                }
            ]}
            style={{ aspectRatio: '1' }}     
        />
    </section>
  )
}
