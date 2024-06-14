import { motion } from "framer-motion";

const About = () => {

    return (
        <div className="h-screen flex justify-center items-center bg-red-200">
            <div className="container flex items-center gap-5">
                <motion.div 
                    className="flex-[0_1_50%]" 
                    initial={{ opacity: 0, x: -100 }} 
                    whileInView={{ opacity: 1, x: 0 }} 
                    transition={{ delay: 0.5, type: "spring", restDelta: 0.5 }}
                >
                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. 
                        Officiis laudantium commodi suscipit harum at sed eius, est molestiae maiores 
                        reprehenderit dolores repellendus distinctio! Ea delectus expedita libero suscipit harum possimus.
                    </p>
                </motion.div>
                <motion.div 
                    className="flex-[0_1_50%]"
                    initial={{ opacity: 0, x: 100 }} 
                    whileInView={{ opacity: 1, x: 0 }} 
                    transition={{ delay: 0.5, type: "spring", restDelta: 0.5 }}
                >
                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. 
                        Officiis laudantium commodi suscipit harum at sed eius, est molestiae maiores 
                        reprehenderit dolores repellendus distinctio! Ea delectus expedita libero suscipit harum possimus.
                    </p>
                </motion.div>
            </div>
        </div>
    )
}
export default About;