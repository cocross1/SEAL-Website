'use client'
import React from 'react';
import { motion } from 'framer-motion';
import SectionHeading from './SectionHeader';
import ProfileCard from './ProfileCard';
import SectionDivider from './SectionDivider';

const TeamSection = () => {
   const tej = "Tej Patel, from Billerica, Massachusetts, is majoring in Molecular Biology, Healthcare Management & Policy, and Statistics through the Life Sciences and Management Program at the University of Pennsylvania and the Wharton School. Inspired by firsthand experiences as a volunteer and advocate, Tej seeks to make healthcare systems more patient-centric and cost-effective. His research, published in top journals including New England Journal of Medicine AI, Nature Medicine, JAMA Health Forum, and Journal of National Cancer Institute, spans multiple domains, including radiation oncology, health economics, and care delivery. Tej is affiliated with Penn Medicine's Radiation Oncology and Breast Surgery Departments, where he examines Medicare spending for radiation schedules and advocates for value-based practices. As a key member of the Human Algorithm Collaboration (HAC) Lab, he also leads studies on behavioral nudges in cancer care and develops new outcome-labeling strategies for improved algorithm performance. Beyond research, Tej serves as the director of SEAL as well as Locust Bioventures, a student-led consulting group supporting scientific ventures from the Perelman School of Medicine. He is also a lead coordinator for the Netter Center Pipeline program, where he develops new curricula and teaches high school students in the Philadelphia school systems about the intersection of life sciences and business, as well as a 2024 Truman Scholar. In his free time, Tej loves to play basketball/volleyball, play new songs on his guitar, and spend time with his family."
    const bhav = ["Bhav Jain, from Pittsburgh, Pennsylvania, is a medical student at Stanford School of Medicine. He lived in Ontario, Canada before immigrating to the United States in the fourth grade. Having traveled to his parents' home of India every year during his childhood, Bhav has been grateful to gain a global, multicultural perspective on pressing social challenges.",
      "He graduated from the Massachusetts Institute of Technology with a bachelor’s degree in computer science and brain & cognitive sciences. Bhav aspires to create high-value, evidence-based healthcare systems and transform clinical care globally as a physician-policymaker. In particular, he seeks to innovate at both public- and private-sector organizations during his career to improve the quality of and lower the cost of patient care. His research on healthcare delivery, social determinants of health, and value-based care has been published in outlets such as Nature Medicine, The Lancet Digital Health, JAMA Oncology, Journal of the National Cancer Institute, American Journal of Public Health, Cancer, Journal of the American College of Surgeons, Journal of General Internal Medicine, and American Journal of Managed Care. Additionally, he has written for Smithsonian Magazine and The Milbank Quarterly Opinion on digital psychiatry and environmental justice.",
      "While at MIT, he launched The Connected Foundation, which forges intergenerational connections between youth and seniors, and Compass, an SMS platform that streamlines patient intake and scheduling. Most recently, he served as a Fellow at the Boston Public Health Commission to implement interventions aimed at curbing substance abuse and homelessness. Bhav is a recipient of the Knight-Hennessy Scholarship, Harry S. Truman Scholarship, Samvid Scholarship, Legatum Fellowship, and 40 Under 40 in Cancer Award. In his free time, Bhav loves cooking, playing tennis, running, and dancing Bhangra, a traditional South Asian folk dance."
    ]
    const aravind = ["Aravind Krishnan, from Hillsborough, New Jersey, is majoring in Molecular Biology, Healthcare Management & Policy, and Statistics through the Life Sciences and Management Program at the University of Pennsylvania and the Wharton School. Interested in using science for social impact, Aravind founded ToxiSense, a biosensor technology for detecting bacterial toxin contamination in medical products and patient blood samples as an early predictor for sepsis. With ToxiSense, Aravind aims to replace the expensive, time-intensive, and unsustainable status quo, and confront the systemic challenge of antimicrobial resistance that results from the current treatment protocols for bacterial infection.",
      "He is also an Undergraduate Researcher in the Greenberg Lab at the Perelman School of Medicine, where he works on understanding DNA damage repair mechanisms, with an interest in also translating these findings towards training the immune system to better confront infectious disease without the need for current antibiotic drugs.",
      "Internationally, Aravind works with the Aravind Eye Hospital in India to conduct research on analyzing disparities and improving care delivery for patients in rural settings through interventions including telemedicine, computer-based vision therapy (CBVT), and transitioning follow-ups from tertiary hospitals to local primary care centers.",
      "In the community, Aravind is the Development Chair and Head of Research of the Shelter Health Outreach Program (SHOP), an undergrad-led organization partnering with Penn Medicine to provide community health services and operate a free clinic for people experiencing homelessness or otherwise lacking medical care, through which Aravind has led several studies focused on improving health outcomes for people experiencing homelessness and other disparities in the city of Philadelphia."
    ]
    const shriya = ["Shriya Garg, from Rome Georgia, is a first-year Foundation Fellow and Stamps Scholar at the University of Georgia. Having grown up in rural Georgia throughout her childhood, Shriya has firsthand seen the need for more equitable healthcare access and healthcare delivery. Majoring in Genetics and Economics, Shriya hopes to pursue a career in health delivery at the intersection of medicine, business, and technology.",
      "Since high school, Shriya has been highly involved in efforts to close the “digital divide” that affects students and patients nationwide without devices or broadband access. Featured in a Forbes article for her efforts, Shriya has collaborated with T-Mobile to provide mobile hotspot access within her community. Shriya has also been involved in efforts to bridge the “digital divide” within the healthcare system by piloting an educational program for patients to learn navigational skills for patient portal or telehealth platforms and implementing a “telehealth intern” role within local stakeholders through the Healthcare Policy Team through her university’s think tank. In addition, Shriya has initiated a secondary initiative to foster a connection between libraries and hospitals to expand access to the internet and broadband via the E-Rate program. Shriya is passionate about addressing mental health on college campuses, serving on the National Youth Council on Mental Health at the Mary Christie Institute. Having conversations with organizations like Active Minds, the American Foundation for Suicide Prevention, the National Alliance on Mental Illness, Penn State Center on Collegiate Mental Health, and others, Shriya is spearheading an effort to support the increase of mental health screening in higher education in collaboration with Healthy Minds and the Mary Christie Institute.",
      "Beyond her advocacy efforts, Shriya writes for a medical magazine named Stethoscope Magazine, serves as a first-year senator through UGA’s Student Government Association, and is involved in computational genomic undergraduate research. She is an avid tennis player, and she loves traveling, listening to new music, and spending time with friends and family."
    ]
    const placeholder = ["This team member has yet to submit a bio, check back later for more info!"]
    const sruthi=["Sruthi Ranganathan is a medical student at the University of Cambridge, having grown up in Singapore. With roots in India, Sruthi has had the privilege of forming experiences around the world in both resource-rich and resource-poor countries. These repertoire of experiences have inspired her to think about disparities, policies and discrimination, particularly in the healthcare field.",
      "With these interests, she is engaged in research involving healthcare disparities and policies with individuals from a wide range of institutions such as London School of Economics, Memorial Sloan Kettering Cancer Centre, MOSC Medical College aiming to break down phenomena such as financial toxicity and the implementation of electronic patient health records. Some of her work has been published in JAMA Surgery and Supportive Care in Cancer. She is now looking to make active differences using the findings from some of these research through SEAL.",
      "Beyond her work in healthcare equity, Sruthi is also invested in advancing cancer research. She specialized in Cancer, Genetic Diseases and Immunology during her time in Cambridge, where she explored the intersections between genetic diseases, cancer and immunology. She is now working with doctors in Singapore in using results from the latest immunofluorescence technology to identify factors associated with cancer immunotherapy response.",
      "Lastly, Sruthi is interested in exploring MedTech innovation, and has taken part in the MedTech Innovation Programme involving key speakers from the Cambridge Judge Business School and Start Codon. She hopes to use some of the knowledge and skills gained in future projects. In her free time, Sruthi enjoys going on walks, and cooking."
   const khushi=["Khushi is a senior at Harvard University from Kansas City, concentrating in Molecular and Cellular with a secondary in Global Health. With HDTT, Khushi serves as the Director of Research for Maternal & Child Health. Outside this role, Khushi conducts research on pediatric leukemia and melanoma at Boston Children’s Hospital, studies cancer health disparities at Memorial Sloan Kettering Hospital, is leading a global health intervention against maternal mortality in Haiti, and spent a summer working in South Africa on an HIV clinical trial. In her free time, Khushi loves DJ-ing for “The Darker Side” radio show on WHRB 95.3 FM, taking walks by the Charles, making Chipotle runs with friends and family, and Tae Kwon Do (she’s a black belt!)."]
   const arnav=["Arnav Ajay Jadav, from Jacksonville, Florida, is a third-year student at Washington University in St. Louis, majoring in Neuroscience with a strong focus on public health and mental health advocacy. Inspired by his non-profit work with the unhoused population in St. Louis and his role as a mental health advocate for a Bay Area startup, Arnav is dedicated to restructuring the current approach to addressing healthcare inequities, particularly in healthcare access and mental well-being for marginalized populations. He aims to drive health policy changes and aspires to become a physician who can influence both the access and delivery of primary and mental healthcare, as well as a researcher pioneering novel translational approaches to combat severe neurological diseases."]
   const stephanie=["Stephanie is a junior at Harvard College studying Molecular & Cellular Biology and Global Health & Health Policy. She conducts research on the applications of stem cell technologies for blood cancers at Boston Children's Hospital and improving health equity for patients with cancer. Her work has been published in The Lancet Regional Health - Americas, Clinical Pharmacology and Therapeutics, and more. She is the founder and Executive Director of the Health Disparities Think Tank, a national student-led research and policy advocacy group combatting health disparities."]
   const alessandro=["Alessandro Hammond is a student at Harvard University and a research fellow at Boston Children’s Hospital, the Broad Institute, and Massachusetts General Hospital. He specializes in using single-cell technology to track genes involved in aggressive tumors and researches health equity. His work has been published in renowned journals such as Nature, Nature Machine Intelligence, Nature Medicine, the Journal of Clinical Oncology, and Frontiers. Alessandro is also the founder of Ivy League Mentoring, a 501(c)(3) nonprofit organization dedicated to supporting underserved youth, which has been featured on Good Morning America and ABC News."]
   const faraan=["Faraan Rahim is an MD candidate at Harvard Medical School, specializing in global health and health policy. He graduated Summa Cum Laude from Duke University with a Bachelor of Science in Chemistry and a minor in global health. Faraan is dedicated to advancing healthcare in low- and middle-income countries, with a particular focus on sub-Saharan Africa. His research aims to promote awareness of global health challenges and provide evidence-based recommendations to policymakers. He has published over 15 articles in esteemed medical journals, including BMJ, Nature Medicine, AIDS, and the Journal of General Internal Medicine. Raised in Murrysville, Pennsylvania, just outside Pittsburgh, Faraan developed his passion for medicine as an EMT in his hometown and continued his involvement in emergency services through Duke University EMS. In his free time, he enjoys lifting weights and riding his electric skateboard."]
   const lucy=["As a Neuroscience major at the University of Pennsylvania, Lucy has a great passion for tackling mental health issues from various perspectives, not only as a clinical issue but equally a cultural one. She explains that her childhood experience of living in South Korea, where ‘mental health’ is rarely ever a topic of discussion, fuels her determination to fight against the deeply rooted stigma and stereotypes. As an aspiring physician, she believes that ‘there is no health without mental health’ and hopes to architect tangible support programs for the mental health of all youth across the country and the world."]
   const urvish=["Urvish Jain is a BS Candidate in Economics at the University of Pittsburgh. His interests lie in global health, global surgery, and advancing healthcare delivery. His publications in these areas have been featured in leading biomedical outlets such as The American Journal of Surgery, The American Journal of Public Health, Supportive Care in Cancer, and Neuro-Oncology. Urvish also practices as an Emergency Medical Technician in underserved communities around the Pittsburgh area and co-directs a summer camp teaching over 100 K-12 students in more than 4 continents vital emergency medical techniques."]
   const aditya=[" "]
   const aaryan=["Aaryan is a second-year undergraduate student at stanford university interested in developing technologies for healthcare. Throughout his time in high school, he has explored medicine and health from various lenses, including research, special education, and policy. Currently, he is working on projects with the stanford department of neurosurgery and the center for biomedical informatics. His previous research experiences including special education research at san francisco state, biostats research at harvard medical school, and diagnostic device development at stanford department of psychiatry."]
   
   
    ]
    const anya=["Anya Khemlani, from Rye, New York, is majoring in Computer Science and Behavioral Neuroscience at Northeastern University’s Khoury College of Computer Science. Anya has neurodegenerative research experience at Columbia University’s Motor Neuron Center, as well as Weill Cornell Medicine’s Burke Neurological Institute. She currently holds a position as a research assistant at Northestern’s Movement Neuroscience Laboratory, where she is helping to conduct Amyotrophic Lateral Sclerosis research. Involved on campus as the co-vice president of the Northeastern University Researchers of Neuroscience club, Anya is hoping to conduct computational neuroscience research in the future. Her original involvement with S.E.A.L was to help build this website, alongside Connor Cross and Alissa Rogozin. Anya is looking forward to contributing to more healthcare policy research through the think tank, and she is excited about the opportunities coming up in the near future. In her free time, Anya loves to dance, listen to music, go to concerts, and spend time with her friends and family."]
    const alissa=["Alissa Rogozin, from Brookline, Massachusetts, is majoring in Computer Science and Design at Northeastern University. On campus, Alissa actively contributes to the TAMID Group, a tech and business consulting organization, where she refines her user-centered design and research skills. Through her participation in the tech consulting track and leadership committees, she is passionate about integrating innovative design solutions into web development. Her collaboration on S.E.A.L's website with Anya Khemlani enabled her to design a seamless digital experience. She hopes to pursue a career in UI/UX design, aiming to leverage technology to create impactful and intuitive user experiences. In her free time, Alissa enjoys dancing, listening to music, and spending time with friends and family.    "]
    const aakash = [" Dr. Aakash Shah is a practicing emergency room doctor at Hackensack Meridian Health. He helped treat some of the earliest confirmed cases of COVID-19 during the pandemic. Aakash also serves as the Director of Addiction Medicine and the Medical Director of Project HEAL (a hospital-based violence intervention program) at Jersey Shore University Medical Center as well as the Medical Director of New Jersey Reentry Corp. His work in those roles has resulted in several reforms, including the elimination of prior authorization requirements for medications for opioid use disorder, and he received the bipartisan endorsement of five former New Jersey governors. He previously served as the Founder and Executive Director of Be Jersey Strong, which represented one of the largest and most diverse efforts to connect the uninsured to coverage in the nation, and was honored by President Barack Obama at the White House for its impact. He has also served as an advisor to several local, state, and federal campaigns and policymakers. He obtained his M.D. from Harvard Medical School, M.B.A. and M.Sc. in Comparative Social Policy from Oxford University as a Rhodes Scholar, and B.A. and B.S. from Ursinus College. He was awarded an honorary doctorate from Centenary University."]
   const alister=["Dr. Alister Martin is an emergency room physician and an esteemed academic, serving as an Assistant Professor at both Harvard Medical School and Harvard Kennedy School. His illustrious career includes a tenure as Chief Resident at Massachusetts General Hospital. A former White House Fellow and Health Policy Aide, Dr. Martin has served in influential roles under the Biden Administration, Governor Peter Shumlin of Vermont, and Congressman Raul Ruiz of California. His unique blend of expertise in politics, policy, and behavioral economics positions him perfectly to leverage healthcare settings for social change. Dr. Martin is the visionary founder of Vot-ER, a trailblazing voter registration initiative that has mobilized a network of over 50,000 healthcare providers and 700 institutions. At A Healthier Democracy, he leads with a commitment to use healthcare as a platform for building programs and movements dedicated to the welfare of vulnerable patients."]
   const kedar=["With over 20 years of experience in healthcare management, public health, and healthcare quality improvement, Dr. Kedar Mate leads the Institute for Healthcare Improvement (IHI) as its President and CEO. IHI is a global organization that uses improvement science to advance and sustain equitable outcomes in health and health systems across the world. He also co-hosts the \"Turn On The Lights\" podcast, where he explores the intersection of health, social justice, and leadership with inspiring guests from diverse backgrounds and fields. Additionally, Kedar co-leads the Rise to Health Coalition, a national health equity initiative by IHI, AMA, and Race Forward that aims to catalyze individuals and organizations committed to health equity and justice to take action. Kedar is passionate about creating health-creating systems that address the social determinants of health, foster collaboration and learning, and promote innovation and excellence."]
   const connor=["Connor Cross is a rising senior at Davidson College, majoring in Computer Science, minoring in Philosophy, and pursuing a pre-medicine track. Connor began his college journey with a strong interest in medicine, working as an Emergency Medical Technician in the Boston area and assisting researchers at Massachusetts General Hospital. While his passion for medicine remains, he has also discovered a love for computer science amidst his college journey. Currently, he is a Software Development Engineer intern at Amazon (specifically the Stores organization), focusing on full-stack development and gaining valuable experience with AWS technology. At Davidson, Connor has been actively involved in various extracurricular activities, including D1 Cheerleading, serving as the social chair of his fraternity, and working as a teacher's assistant for both chemistry and computer science classes. His initial involvement with S.E.A.L. was to help construct the website alongside Anya Khemlani and Alissa Rogozin. Connor is excited to continue exploring the intersection of computer science and medicine in his professional career after graduating in May of 2025."]
   return (
      <div className="max-w-screen-xl mx-auto 
      flex flex-col gap-6
      mt-10 p-4">
      <SectionHeading title="Our Team" />
      <SectionDivider text="Team Members"/>
      <div className="
               grid
               grid-cols-1 md:grid-cols-2 lg:grid-cols-3
               gap-6">
      <motion.div
                  initial={{ y: 50, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  viewport={{ once: false }}
                  transition={{ duration: 0.8, ease: "easeInOut" }}
                >
                  <ProfileCard name="Tej Patel" bio={[tej]} imageSrc="/images/Tej Patel.jpeg" linkedIn="https://www.linkedin.com/in/tej-a-patel/" email="tapatel@wharton.upenn.edu" googleScholar="https://scholar.google.com/citations?user=gt6RPysAAAAJ&hl=en&oi=ao" twitter="https://x.com/TejAPatel_" />
        </motion.div>
        <motion.div
                  initial={{ y: 50, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  viewport={{ once: false }}
                  transition={{ duration: 0.8, ease: "easeInOut" }}
                >
                  <ProfileCard name="Bhav Jain" bio={bhav} imageSrc="/images/BJ_Headshot_1.jpg" linkedIn="https://www.linkedin.com/in/bhavjain/" email="bhavjain@stanford.edu" googleScholar="https://scholar.google.com/citations?hl=en&user=FosmlwsAAAAJ&view_op=list_works" twitter="https://x.com/BhavJain_"/>
        </motion.div>
        <motion.div
                  initial={{ y: 50, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  viewport={{ once: false }}
                  transition={{ duration: 0.8, ease: "easeInOut" }}
                >
                <ProfileCard name="Shriya Garg" bio={shriya} imageSrc="/images/Shriya_Garg_headshot.jpeg" />
        </motion.div>
        <motion.div
                  initial={{ y: 50, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  viewport={{ once: false }}
                  transition={{ duration: 0.8, ease: "easeInOut" }}
               >
              <ProfileCard name="Sruthi Ranganathan" bio={sruthi} imageSrc="/images/Sruthi Ranganathan.jpg" linkedIn="https://www.linkedin.com/in/sruthi-ranganathan-9243441b7/" twitter="https://x.com/SruthiRanganat1"/>
        </motion.div>
        <motion.div
                  initial={{ y: 50, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  viewport={{ once: false }}
                  transition={{ duration: 0.8, ease: "easeInOut" }}
                  >
                  <ProfileCard name="Aravind Krishnan" bio={aravind} imageSrc="/images/aravind.jpg" linkedIn="https://www.linkedin.com/in/aravind-m-krishnan/" twitter="https://x.com/_AravindK_"/>
        </motion.div>
        <motion.div
                  initial={{ y: 50, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  viewport={{ once: false }}
                  transition={{ duration: 0.8, ease: "easeInOut" }}
                >
                  <ProfileCard name="Khushi Kohli" bio={khushi} imageSrc="/images/Khushi Kohli.jpeg" linkedIn="https://www.linkedin.com/in/khushi-kohli-0830/" twitter="https://x.com/khushkohli?lang=en" />
        </motion.div>
        <motion.div
                  initial={{ y: 50, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  viewport={{ once: false }}
                  transition={{ duration: 0.8, ease: "easeInOut" }}
                >
                  <ProfileCard name="Arnav Ajay Jadav" bio={arnav} imageSrc="/images/arnav.jpg" linkedIn="https://www.linkedin.com/in/arnav-ajayjadav/"/>
        </motion.div>
        <motion.div
                  initial={{ y: 50, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  viewport={{ once: false }}
                  transition={{ duration: 0.8, ease: "easeInOut" }}
                >
           <ProfileCard name="Alessandro Hammond" bio={alessandro} imageSrc="/images/alessandro.jpg />
        </motion.div>
        <motion.div
                  initial={{ y: 50, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  viewport={{ once: false }}
                  transition={{ duration: 0.8, ease: "easeInOut" }}
                >
           <ProfileCard name="Faraan Rahim" bio={faraan} imageSrc="/images/faraan.jpg" linkedIn="https://www.linkedin.com/in/faraan-rahim-3b78941aa/" />
        </motion.div>
        <motion.div
                  initial={{ y: 50, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  viewport={{ once: false }}
                  transition={{ duration: 0.8, ease: "easeInOut" }}
                >
           <ProfileCard name="Seungwon (Lucy) Lee" bio={lucy} imageSrc="/images/lucy.png" linkedIn="https://www.linkedin.com/in/seungwon-lucy-lee-657495274/" />
        </motion.div>
        <motion.div
                  initial={{ y: 50, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  viewport={{ once: false }}
                  transition={{ duration: 0.8, ease: "easeInOut" }}
                >
           <ProfileCard name="Urvish Jain" bio={urvish} imageSrc="/images/urvish.jpg" linkedIn="https://www.linkedin.com/in/urvishjain/" />
        </motion.div>
        <motion.div
                  initial={{ y: 50, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  viewport={{ once: false }}
                  transition={{ duration: 0.8, ease: "easeInOut" }}
                >
           <ProfileCard name="Aditya Arkalgud" bio={aditya} imageSrc="/images/aditya.jpg" linkedIn="https://www.linkedin.com/in/adityaarkalgud/" />
        </motion.div>
        <motion.div
                  initial={{ y: 50, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  viewport={{ once: false }}
                  transition={{ duration: 0.8, ease: "easeInOut" }}
                >
           <ProfileCard name="Stephanie Wang" bio={stephanie} imageSrc="/images/stephanie.jpg" linkedIn="https://www.linkedin.com/in/stephaniewang2004/" />
        </motion.div>
        <motion.div
                  initial={{ y: 50, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  viewport={{ once: false }}
                  transition={{ duration: 0.8, ease: "easeInOut" }}
                >
           <ProfileCard name="Aaryan Shah" bio={aaryan} imageSrc="/images/aaryan.jpg" linkedIn = "https://www.linkedin.com/in/aaryanxshah/" />
        </motion.div>
        <motion.div
                  initial={{ y: 50, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  viewport={{ once: false }}
                  transition={{ duration: 0.8, ease: "easeInOut" }}
                >
               
        
      </div>
      <SectionDivider text="Our Advisors"/>
      <div className="
               grid
               grid-cols-1 md:grid-cols-2 lg:grid-cols-3
               gap-6">
        <motion.div
                  initial={{ y: 50, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  viewport={{ once: false }}
                  transition={{ duration: 0.8, ease: "easeInOut" }}
                >
                  <ProfileCard name="Aakash Shah" bio={aakash} imageSrc="/images/akash.jpg" linkedIn="https://www.linkedin.com/in/aakash-shah-8ba2b355/" twitter="https://x.com/Aakash_K_Shah"/>
        </motion.div>
        <motion.div
                  initial={{ y: 50, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  viewport={{ once: false }}
                  transition={{ duration: 0.8, ease: "easeInOut" }}
                >
                  <ProfileCard name="Alister Martin" bio={alister} imageSrc="/images/alister.png" linkedIn="https://www.linkedin.com/in/alister-martin-41b1369a/" twitter="https://x.com/AlisterFMartin"/>
        </motion.div>
        <motion.div
                  initial={{ y: 50, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  viewport={{ once: false }}
                  transition={{ duration: 0.8, ease: "easeInOut" }}
                >
                  <ProfileCard name="Kedar Mate" bio={kedar} imageSrc="/images/kedar.png" linkedIn="https://www.linkedin.com/in/kedarmatemd/" twitter="https://x.com/KedarMate"/>
        </motion.div>
      </div>
      <SectionDivider text="Web Development Team"/>
      <div className="
               grid
               grid-cols-1 md:grid-cols-2 lg:grid-cols-3
               gap-6">
        <motion.div
                  initial={{ y: 50, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  viewport={{ once: false }}
                  transition={{ duration: 0.8, ease: "easeInOut" }}
                >
                  <ProfileCard name="Connor Cross" bio={connor} imageSrc="/images/connor.png" linkedIn="https://www.linkedin.com/in/connor-cross-950116236/" gitHub="https://github.com/cocross1" />
        </motion.div>
        <motion.div
                  initial={{ y: 50, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  viewport={{ once: false }}
                  transition={{ duration: 0.8, ease: "easeInOut" }}
                >
                  <ProfileCard name="Anya Khemlani" bio={anya} imageSrc="/images/anya.png" linkedIn="https://www.linkedin.com/in/anya-khemlani/"  gitHub="https://github.com/AnyaKhemlani" email="khemlani.a@northeastern.edu"/>
        </motion.div>
        <motion.div
                  initial={{ y: 50, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  viewport={{ once: false }}
                  transition={{ duration: 0.8, ease: "easeInOut" }}
                >
                  <ProfileCard name="Alissa Rogozin" bio={alissa} imageSrc="/images/alissa.png" linkedIn="https://www.linkedin.com/in/alissa-rogozin"  gitHub="https://github.com/alissarogozin25" email="rogozin.a@northeastern.edu"/>
        </motion.div>
      </div>
      </div>
      
    );
};

export default TeamSection;










