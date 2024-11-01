import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion"
const Faq = () => {
    return(
        <>
        <div className="max-w-sm md:max-w-3xl lg:max-w-4xl mx-auto px-4 py-12">
            <div className="text-center py-12">
                <p className="tracking-wide mb-4">FAQ</p>
                <h1 className="font-semibold text-2xl xl:text-5xl">Frequently asked questions</h1>
            </div>
            <Accordion type="single" collapsible>

                <AccordionItem value="item-1" className="">
                    <AccordionTrigger className="md:text-base">
                    Comment puis-je suivre la productivité de mes employés en temps réel ?
                    </AccordionTrigger>
                    <AccordionContent className="md:text-base">
                    Grâce à notre tableau de bord intuitif, vous pouvez suivre en temps réel
                    les heures de travail, les tâches complétées et les statuts des employés.
                    Des rapports détaillés vous aident également à analyser la productivité et
                    les performances de chaque membre de l'équipe.
                    </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-2">
                    <AccordionTrigger className="md:text-base">
                    Quels types de rapports puis-je générer avec la plateforme ?
                    </AccordionTrigger>
                    <AccordionContent className="md:text-base">
                    Vous pouvez générer des rapports personnalisés pour suivre la
                    productivité de vos équipes, comparer les performances entre employés et
                    analyser les données sur une base hebdomadaire, mensuelle ou en temps
                    réel.
                    </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-3">
                    <AccordionTrigger className="md:text-base">
                    Puis-je personnaliser les fonctionnalités selon mes besoins ?
                    </AccordionTrigger>
                    <AccordionContent className="md:text-base">
                    Oui, notre plateforme est entièrement personnalisable. Vous pouvez adapter
                    le tableau de bord, les rapports, et même les statuts des employés selon
                    les spécificités de votre entreprise.
                    </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-4">
                    <AccordionTrigger className="md:text-base">
                    Quels sont les outils intégrés à la plateforme ?
                    </AccordionTrigger>
                    <AccordionContent className="md:text-base">
                    Notre plateforme s'intègre facilement avec des outils de communication
                    tels que Slack et Microsoft Teams, ainsi qu'avec des calendriers comme
                    Google Calendar, pour une gestion centralisée et fluide.
                    </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-5">
                    <AccordionTrigger className="md:text-base">
                    Est-ce que je peux automatiser certaines tâches ?
                    </AccordionTrigger>
                    <AccordionContent className="md:text-base">
                    Oui, la plateforme permet d'automatiser des tâches répétitives, comme les
                    rappels de tâches, les notifications de statut ou la génération de
                    rapports périodiques, pour vous faire gagner du temps et améliorer
                    l'efficacité.
                    </AccordionContent>
                </AccordionItem>
            </Accordion>

        </div>
        </>
    )
}

export default Faq