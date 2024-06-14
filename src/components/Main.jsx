import { motion } from "framer-motion"
import { container, item } from "../animation"

const Main = () => {



    return (
        <div className="h-screen flex justify-center items-center bg-cyan-200">
            <motion.div 
                className="container mx-auto flex flex-col items-center"
                variants={container}
                initial="hidden"
                whileInView="show"
            >
                <motion.h1 
                    className="text-2xl"
                    variants={item}
                >
                        Hello
                </motion.h1>
                <motion.h2 
                    className="text-xl mt-4"
                    variants={item}    
                >
                    World
                </motion.h2>
                <motion.p 
                    className="text-center mt-10"
                    variants={item}
                >
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. 
                    Similique autem ipsum, in ad sint accusantium, ratione sunt cupiditate quas cum 
                    repellat quam dolorem explicabo, sequi fugiat. Eius, aspernatur ipsam? Optio.
                </motion.p>
            </motion.div>
        </div>
    )
}

export default Main