<template>
    <div class="mt-[148px] flex flex-col items-center  gap-y-[90px]">
        <div class="md:w-[735px] w-[100%] text-center">
            <h1 class="text-[28px] md:text-[40px] font-[nim]">{{ $t('achievements.title') }}</h1>
            <p class="text-[18px] md:text-[20px] text-gray-600">{{ $t('achievements.description') }}</p>
        </div>

        <div
            class="flex flex-wrap justify-center grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-[30px] text-center gap-x-[48px] justify-items-center">

            <div class="w-[345px]">
                <i class="fa fa-shield-alt fa-2x text-[lightgreen] mb-3"></i>
                <h1 class="text-[22px] font-[nim] mb-[10px]">{{ $t('achievements.achievement.firstAchieve.title') }}
                </h1>
                <p class="text-gray-600">{{ $t('achievements.achievement.firstAchieve.description') }}</p>
            </div>
            <div class="w-[345px] mt-[-25px]">
                <i class="fa fa-trophy fa-2x text-[orange] mb-3"></i>
                <h1 class="text-[22px] font-[nim] mb-[10px]">{{ $t('achievements.achievement.secondAchieve.title') }}</h1>
                <p class="text-gray-600">{{ $t('achievements.achievement.secondAchieve.description') }}</p>
            </div>
            <div class="w-[345px] ">
                <i class="fa fa-users fa-2x text-blue-400 mb-3"></i>
                <h1 class="text-[22px] font-[nim] mb-[10px]">{{ $t('achievements.achievement.thridAchieve.title') }}</h1>
                <p class="text-gray-600 ">{{ $t('achievements.achievement.thridAchieve.description') }}</p>
            </div>

        </div>
    </div>
</template>