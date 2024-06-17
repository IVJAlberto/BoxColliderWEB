import { ParallaxBanner } from 'react-scroll-parallax'

export const ParallaxImage = ({secDiv, cnParallax, cnDiv, id, imgURL}) => {
  return (
    <section className={`${secDiv}`}>
        <ParallaxBanner 
            className={`${cnParallax}`}
            layers={[
                {
                  children:
                    <div className={`${cnDiv}`} id={`${id}`}>	
                      <img src={`${imgURL}`} alt="" />
                    </div>,
                    expanded: false,
                    speed: 10,
                    scale: [1, 1],
                }
            ]}
            style={{ aspectRatio: '1' }}     
        />
    </section>
  )
}
