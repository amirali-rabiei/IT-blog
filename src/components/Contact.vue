<template>
    <div id="contact"
        class="mt-[100px]  flex flex-col md:flex-row lg:flex-row gap-y-[50px] justify-around bg-[black] rounded-[22px] text-white p-[40px]">
        <div class="w-[100%] md:w-[400px] lg:w-[400px] flex flex-col gap-y-6">
            <div class="">
                <h2 class="text-4xl font-[nim]">Contact us</h2>
                <p class="leading-relaxed">Have any questions or suggestions? We’d be happy to hear from you!
                    You can use the form below or reach us through our contact channels</p>
            </div>
            <div class="flex flex-col gap-y-4">
                <div>
                    <i class="fa fa-phone mr-1"></i>
                    <span>+98 999 999 99</span>
                </div>
                <div>
                    <i class="fa fa-envelope mr-1"></i>
                    <span>ai@gmail.com</span>
                </div>
                <div>
                    <i class="fa fa-map mr-1"></i>
                    <span>example , exmaple blvevarde</span>
                </div>
            </div>
        </div>
        <div class="mx-auto md:mx-0 md:text-start w-full lg:w-fit md:w-fit lg:text-start">
            <div class="flex flex-col gap-y-6">
                <div>
                    <label for="username" class="block">Username</label>
                    <input id="username" class="outline-0 border-b border-red-500 text-[#A8A8A8] w-full lg:w-[300px]"
                        type="text">
                </div>
                <div>
                    <label for="email" class="block">Email</label>
                    <input id="email"
                        class=" placeholder-[#A8A8A8] text-[#A8A8A8] outline-0 border-b-1 border-[red] w-full lg:w-[300px]"
                        type="text">
                </div>
                <div>
                    <label for="message" class="block">Message</label>
                    <textarea id="message" cols="20" rows="2"
                        class="w-full lg:w-[300px] resize-none text-[#A8A8A8] max-h-[55px] outline-0 border-b-1 border-[red]"></textarea>
                </div>
                <button class="text-[black] rounded-[6px] bg-[white] lg:w-fit md:w-fit py-1 px-7">Submit</button>

            </div>
        </div>
    </div>
</template>