import { motion } from "framer-motion";

const containerVariants = {
    // hidden: { opacity: 0 }, // это можно не задавать если не нужна анимауия родителя а только детей
    visible: {
    //   opacity: 1, // это можно не задавать если не нужна анимауия родителя а только детей
      transition: {
        delayChildren: 0.5, // зажерєка начального появдения (первого єлемента)
        staggerChildren: 0.5, // задержка между появлением элементов
      },
    },
  };
  
const itemVariantsLeft = {
    hidden: { opacity: 0, x: -100 },
    visible: { opacity: 1, x: 0 },
};

const itemVariantsRight = {
    hidden: { opacity: 0, x: 100 },
    visible: { opacity: 1, x: 0 },
    transition: { duration: 0.5 }
};

const Contacts = () => {

    return (
        <div 
            className="h-screen bg-green-200 flex justify-center items-center"   
        >
            <div className="container mx-auto">
                <motion.div 
                    className="grid grid-cols-2 gap-10" 
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: false }}
                    variants={containerVariants}
                >
                    <motion.div variants={itemVariantsLeft}>
                        <p className="text-center">Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                            Maiores aliquam at veritatis exercitationem rerum saepe corporis architecto 
                            tempore in laudantium sequi voluptates earum labore quasi quae, vel, nisi impedit sunt?
                        </p>
                    </motion.div>
                    <motion.div variants={itemVariantsRight}>
                        <p className="text-center">Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                            Maiores aliquam at veritatis exercitationem rerum saepe corporis architecto 
                            tempore in laudantium sequi voluptates earum labore quasi quae, vel, nisi impedit sunt?
                        </p>
                    </motion.div>
                    <motion.div variants={itemVariantsLeft}>
                        <p className="text-center">Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                            Maiores aliquam at veritatis exercitationem rerum saepe corporis architecto 
                            tempore in laudantium sequi voluptates earum labore quasi quae, vel, nisi impedit sunt?
                        </p>
                    </motion.div>
                    <motion.div variants={itemVariantsRight}>
                        <p className="text-center">Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                            Maiores aliquam at veritatis exercitationem rerum saepe corporis architecto 
                            tempore in laudantium sequi voluptates earum labore quasi quae, vel, nisi impedit sunt?
                        </p>
                    </motion.div>
                </motion.div>
            </div>
        </div>
    )
}
export default Contacts;