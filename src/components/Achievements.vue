<script setup>
    import ScrollReveal from 'scrollreveal';
    import { nextTick, onMounted } from 'vue';
    
    onMounted(async () => {
        await nextTick();
    
        const scrollRevealOption = {
            distance: "50px",
            origin: "bottom",
            duration: 1000,
            interval: 300,
            reset: false,
        };
        
        ScrollReveal().reveal('.boxAni', scrollRevealOption);
    });
    </script>
    
    <template>
        <div class="mt-[148px] flex flex-col items-center gap-y-[90px]">
            <div class="md:w-[735px] max-w-[90%] w-[100%] text-center">
                <p class="text-[28px]  text-[#081F3C] md:text-[40px]">{{ $t('achievements.title') }}</p>
                <!-- <p class="text-[18px]  md:text-[20px] text-gray-600">{{ $t('achievements.description') }}</p> -->
            </div>
            <div class="flex flex-wrap w-full justify-center grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-[30px] text-center gap-x-[48px] justify-items-center">
                <div class="w-[345px] boxAni border-[1px] p-3 border-[#f7f8fd]">
                    <i class="fa fa-shield-alt fa-2x text-[lightgreen] mb-3"></i>
                    <h3 class="text-[22px]  text-[#081F3C]  mb-[10px]">{{ $t('achievements.achievement.firstAchieve.title') }}</h3>
                    <p class="text-gray-600">{{ $t('achievements.achievement.firstAchieve.description') }}</p>
                </div>
                <div class="w-[345px] boxAni p-3 border-[2px] border-[#f7f8fd] mt-[-25px]">
                    <i class="fa fa-trophy fa-2x text-[orange] mb-3"></i>
                    <h3 class="text-[22px] text-[#081F3C]  mb-[10px]">{{ $t('achievements.achievement.secondAchieve.title') }}</h3>
                    <p class="text-gray-600">{{ $t('achievements.achievement.secondAchieve.description') }}</p>
                </div>
                <div class="w-[345px] boxAni p-3 border-[1px] border-[#f7f8fd]">
                    <i class="fa fa-users fa-2x text-blue-400 mb-3"></i>
                    <h3 class="text-[22px] text-[#081F3C]  mb-[10px]">{{ $t('achievements.achievement.thridAchieve.title') }}</h3>
                    <p class="text-gray-600">{{ $t('achievements.achievement.thridAchieve.description') }}</p>
                </div>
            </div>
        </div>
    </template>
    