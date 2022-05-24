import { storeToRefs } from 'pinia'
import { usePaginatorStore } from '@/stores/paginator'
import useScrollToPosition from '@/composables/useScrollToPosition'

const useNavigation = () => {
    const { active, sections } = storeToRefs(usePaginatorStore())

    function scrollToSection(section: string) : any {
        const element = document.querySelector(`#${section}`)
        const elementTop = (element as HTMLElement).offsetTop
        if(elementTop) useScrollToPosition(300, elementTop - 80)
    }

    return {
        active,
        sections,

        scrollToSection
    }
}

export default useNavigation;