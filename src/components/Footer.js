import React from 'react';
import { SocialMediaIconsReact } from 'social-media-icons-react';
const Footer = () => {
    return (
        <footer class=" container mx-auto mt-6">
            <div class="text-gray-600 text-center text-sm">
                <p class="mb-2">© CAQG.  All rights reserved. Yes, all of them.</p>
                <p class="flex justify-center mb-2">
                    <SocialMediaIconsReact className="px-4" borderColor="rgba(0,0,0,0.25)" borderWidth="1" borderStyle="solid" icon="github" iconColor="rgba(255,255,255,1)" backgroundColor="rgba(19,19,19,1)" iconSize="5" roundness="50%" url="https://github.com/caqg95" size="38" />
                    <SocialMediaIconsReact className="px-4" borderColor="rgba(0,0,0,0.25)" borderWidth="1" borderStyle="solid" icon="linkedin" iconColor="rgba(255,255,255,1)" backgroundColor="rgba(40,103,178,1)" iconSize="5" roundness="50%" url="https://www.linkedin.com/in/carlos-alberto-quintero-grande-7b7766a7/" size="38" />
                    <SocialMediaIconsReact borderColor="rgba(0,0,0,0.25)" borderWidth="5" borderStyle="solid" icon="skype" iconColor="rgba(255,255,255,1)" backgroundColor="rgba(28,186,223,1)" iconSize="5" roundness="50%" url="https://join.skype.com/invite/xEf2ss0PvmgU" size="38" />
                    <SocialMediaIconsReact className="px-4" borderColor="rgba(0,0,0,0.25)" borderWidth="1" borderStyle="solid" icon="instagram" iconColor="rgba(255,255,255,1)" backgroundColor="rgba(253,29,29,1)" iconSize="5" roundness="50%" url="https://www.instagram.com/carlos.quintero95/" size="38" />
                </p>
            </div>
        </footer>
    );
}

export default Footer;