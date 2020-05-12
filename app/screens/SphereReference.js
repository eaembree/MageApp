import React from 'react';
import { createStackNavigator } from '@react-navigation/stack'
import { View, Text, StyleSheet, ScrollView, TouchableOpacity, Image } from 'react-native';

import { MagePurple, MageGold } from '../Styles';
import { Icons128 } from '../MageIcons'
import { FontAwesome5 } from '@expo/vector-icons';
import { clamp } from '../utils/Math'

const Stack = createStackNavigator();

const ico = {
    cor: Icons128.Correspondence,
    ent: Icons128.Entropy,
    for: Icons128.Forces,
    lif: Icons128.Life,
    mat: Icons128.Matter,
    min: Icons128.Mind,
    pri: Icons128.Prime,
    spi: Icons128.Spirit,
    tim: Icons128.Time,
    dat: Icons128.Data,
    dim: Icons128.Dimensional,
    uti: Icons128.PrimalUtility
}

export default function SphereReference() {
    return (
        <Stack.Navigator>
            <Stack.Screen name="SphereList" component={SphereList} options={{ title: "Sphere List" }} />
            <Stack.Screen name="Correspondence" component={Correspondence} />
            <Stack.Screen name="Data" component={Data} />
            <Stack.Screen name="Entropy" component={Entropy} />
            <Stack.Screen name="Forces" component={Forces} />
            <Stack.Screen name="Life" component={Life} />
            <Stack.Screen name="Matter" component={Matter} />
            <Stack.Screen name="Mind" component={Mind} />
            <Stack.Screen name="Prime" component={Prime} />
            <Stack.Screen name="PrimalUtility" component={PrimalUtility} />
            <Stack.Screen name="Spirit" component={Spirit} />
            <Stack.Screen name="DimensionalScience" component={DimensionalScience} />
            <Stack.Screen name="Time" component={Time} />
        </Stack.Navigator>
    )
}

function SphereList({ navigation }) {
    const doNav = (name) => navigation.navigate(name)

    return (
        <View style={{ flex: 1, justifyContent: 'space-around' }}>
            <SphereLinkSplit
                imgLeft={ico.cor} doNavLeft={() => doNav("Correspondence")} titleLeft="Correspondence"
                imgRight={ico.dat} doNavRight={() => doNav("Data")} titleRight="Data"
            />
            <SphereLink img={ico.ent} doNav={() => doNav("Entropy")} title="Entropy" />
            <SphereLink img={ico.for} doNav={() => doNav("Forces")} title="Forces" />
            <SphereLink img={ico.lif} doNav={() => doNav("Life")} title="Life" />
            <SphereLink img={ico.mat} doNav={() => doNav("Matter")} title="Matter" />
            <SphereLink img={ico.min} doNav={() => doNav("Mind")} title="Mind" />
            <SphereLinkSplit
                imgLeft={ico.pri} doNavLeft={() => doNav("Prime")} titleLeft="Prime"
                imgRight={ico.uti} doNavRight={() => doNav("PrimalUtility")} titleRight="Primal Utility"
            />
            <SphereLinkSplit
                imgLeft={ico.spi} doNavLeft={() => doNav("Spirit")} titleLeft="Spirit"
                imgRight={ico.dim} doNavRight={() => doNav("DimensionalScience")} titleRight="Dimensional Science"
            />
            <SphereLink img={ico.tim} doNav={() => doNav("Time")} title="Time" />
        </View>
    )
}

function SphereLink({ img, imgRight, doNav, title }) {
    let img2 = imgRight ? imgRight : img;
    return (
        <TouchableOpacity onPress={() => doNav()}
            style={styles.sphereLink}
        >
            <Image source={img} style={styles.sphereImage} />
            <Text style={styles.sphereText}>{title}</Text>
            <Image source={img2} style={styles.sphereImage} />
        </TouchableOpacity>
    )
}

function SphereLinkSplit({ imgLeft, titleLeft, doNavLeft, imgRight, titleRight, doNavRight }) {
    return (
        <View style={{flexDirection: 'row', justifyContent: 'center', alignItems: 'center'}}>
            <TouchableOpacity onPress={() => doNavLeft()}
                style={styles.sphereLink}
            >
                <Image source={imgLeft} style={styles.sphereImage} />
                <Text style={styles.sphereText}>{titleLeft}</Text>
            </TouchableOpacity>
            <Text style={{fontSize: 20, color: 'grey'}}> | </Text>
            <TouchableOpacity onPress={() => doNavRight()}
                style={styles.sphereLink}
            >
                <Text style={styles.sphereText}>{titleRight}</Text>
                <Image source={imgRight} style={styles.sphereImage} />
            </TouchableOpacity>
        </View>

    )
}

function Dots({ filled }) {
    let finalFilled = clamp(filled || 0, 0, 5);
    let result = [];
    for (let i = 0; i < finalFilled; i++) {
        result.push(<FontAwesome5 key={i.toString()} name="circle" size={10} color="black" solid />);
    }
    for (let i = finalFilled; i < 5; i++) {
        result.push(<FontAwesome5 key={i.toString()} name="circle" size={10} color="black" />);
    }
    return <View style={{ flexDirection: 'row' }}>{result}</View>;
}

function DotsAndPowers({ filled, data }) {
    let rows = []
    for (let i = 0; i < data.length; i++) {
        rows.push(
            <View key={i.toString()}>
                <View style={detail.leftIndent}>
                    <Text style={{ fontWeight: 'bold' }}>{data[i].title}</Text>
                    <View style={detail.leftIndent}>
                        <Text>{data[i].body}</Text>
                    </View>
                </View>
            </View>)
    }

    return (
        <View style={detail.dotsGroupWrapper}>
            <View style={detail.dotsWrapper}>
                <Dots filled={filled} />
            </View>
            {rows}
        </View>
    )
}

function StandardPowers({ level1Data, level2Data, level3Data, level4Data, level5Data }) {
    return (
        <View style={detail.leftIndent}>
            <Text style={detail.powersTitle}>Standard Powers</Text>
            <View style={[detail.leftIndent, detail.rightGutter]}>
                <View style={detail.dotsWrapper}>
                    <DotsAndPowers filled={1} data={level1Data} />
                </View>
                <View style={detail.dotsWrapper}>
                    <DotsAndPowers filled={2} data={level2Data} />
                </View>
                <View style={detail.dotsWrapper}>
                    <DotsAndPowers filled={3} data={level3Data} />
                </View>
                <View style={detail.dotsWrapper}>
                    <DotsAndPowers filled={4} data={level4Data} />
                </View>
                <View style={detail.dotsWrapper}>
                    <DotsAndPowers filled={5} data={level5Data} />
                </View>
            </View>
        </View>
    )
}

function SphereDetail({ title, icon, level1Data, level2Data, level3Data, level4Data, level5Data }) {
    return (
        <ScrollView style={detail.container}>
            <View style={detail.headerRow}>
                <Image source={icon} style={detail.sphereImageLarge} />
                <Text style={detail.sphereTextLarge}>{title}</Text>
                <Image source={icon} style={detail.sphereImageLarge} />
            </View>
            <StandardPowers
                level1Data={level1Data}
                level2Data={level2Data}
                level3Data={level3Data}
                level4Data={level4Data}
                level5Data={level5Data} />
        </ScrollView>
    )
}

function Correspondence() {
    let level1Data = [
        { title: "Immediate Spatial Perceptions", body: "Raises the mage's awareness of space to determine exact directions and distances, as well as distortions of the same. Allows locating things that the mage cannot perceive with their human senses." }
    ]
    let level2Data = [
        { title: "Sense, Touch, Thicken And Reach Through Space", body: "Allows the mage to extend their senses beyond their current location. With adjacent Spheres of Life or Matter, they can draw small lifeforms or objects through space. Allows one to dampen spatial distortion that can be sensed on rank 1." }
    ]
    let level3Data = [
        { title: "Pierce Space", body: "Allows a mage to penetrate the very fabric of space itself, opening small portals that allow travel via teleportation. With adjacent Spheres, the mage can teleport Patterns from a distance." },
        { title: "Seal Gate", body: "Allows a mage to ward an area against Correspondence Effects and mundane attempts to enter." },
        { title: "Co-Locality Perception", body: "Allows a mage to split their perceptions over various locations, allowing them to see multiple places simultaneously." }
    ]
    let level4Data = [
        { title: "Rend Space", body: "Allows a mage to create permanent portals to any location within the Tellurian." },
        { title: "Co-locate Self", body: "By causing their own Pattern to manifest in several perceived spaces, the mage can appear to exist in multiple places at once. Through the adjacent use of the Mind and Life Sphere, the appearance can interact and think just as the mage would." },
        { title: "Ward", body: "The mage can isolate forces, spaces, objects, or people into their own tiny realms with the use of various auxiliary Spheres." }
    ]
    let level5Data = [
        { title: "Mutate Localities", body: "Allows a mage to bend space according to their will, altering sizes and volumes, stretching distances and willfully manipulating any objects that appear in space." },
        { title: "Co-Locate Space", body: "Allows a mage to merge chunks of space together, superimposing location on each other instead of creating a portal." }
    ]
    return (
        <SphereDetail
            title="Correspondence"
            icon={ico.cor}
            level1Data={level1Data}
            level2Data={level2Data}
            level3Data={level3Data}
            level4Data={level4Data}
            level5Data={level5Data} />
    )
}

function Data() {
    let level1Data = [
        { title: "On the Ones and Zeroes", body: "Allows the user to determine the exact distance between points or the connections between visible objects." }
    ]
    let level2Data = [
        { title: "The Reach And The View", body: "Allows expansion of one's connections to see and touch places in other areas of the world, so long as they have instruments that allow them access to distant locations." }
    ]
    let level3Data = [
        { title: "Quantum Teleportation", body: "Allows the relocation of self via quantum teleportation." },
        { title: "Firewalling", body: "Allows the user to bar an area against any attempts to intrude via particle physics." },
        { title: "Surveillance Hub", body: "Allows the splitting of one's perceptions to watch multiple locations at once." }
    ]
    let level4Data = [
        { title: "Between Space", body: "Allows the shaping of distance to one's designs, allowing for mass transportations of physical objects through \"portals\"." },
        { title: "Dimensional Cohabitation", body: "Allows the creation duplicates at other places (that can become solid through the use of other Pattern spheres)." }
    ]
    let level5Data = [
        { title: "Redistribute Physical Properties", body: "Allows the manipulation of physics as easily as code, to create overlays of multiple places, altering sizes and volumes, or stretching distances." }
    ]

    return (
        <SphereDetail
            title="Data"
            icon={ico.dat}
            level1Data={level1Data}
            level2Data={level2Data}
            level3Data={level3Data}
            level4Data={level4Data}
            level5Data={level5Data} />
    )
}

function Entropy() {
    let level1Data = [
        { title: "Sense Fate and Fortune", body: "The mage can sense shifts in probability and spot flaws in Patterns." },
        { title: "Ring of Truth", body: "The mage can note the subtle yet telling details in a person's speech and behavior that suggest whether or not they are telling what they believe to be the truth." }
    ]
    let level2Data = [
        { title: "Control Probability", body: "bThe mage can influence Patterns with Entropic energy, which allows them to control the outcome of simple events (like altering a dice throw).ody" }
    ]
    let level3Data = [
        { title: "Affect Predictable Patterns", body: "boThe mage can directly affect inanimate Patterns of varying complexity, controlling the speed at which material objects fail or decay.dy" }
    ]
    let level4Data = [
        { title: "Affect Life", body: "The mage can direct entropic energy at living patterns, cursing or blessing them." }
    ]
    let level5Data = [
        { title: "Affect Thought", body: "The mage can affect synapses within a target's brain, causing random behavior." },
        { title: "Shape Memes", body: "The mage can infuse ideas itself with entropic energy, changing, evolving, bringing them to prominence, or discarding them as he sees fit." },
        { title: "Binding Oath", body: "The mage can create a geas, an oath that will bring terrible misfortune on anyone who breaks it." }
    ]

    return (
        <SphereDetail
            title="Entropy"
            icon={ico.ent}
            level1Data={level1Data}
            level2Data={level2Data}
            level3Data={level3Data}
            level4Data={level4Data}
            level5Data={level5Data} />
    )
}

function Forces() {
    let level1Data = [
        { title: "Perceive Forces", body: "The mage becomes privy to Force patterns around them, transcending the limits of human sensory organs." }
    ]
    let level2Data = [
        { title: "Control Minor Forces", body: "The mage can alter existing forces within sensory range. Applications are varied and allow a mage to warp light to make things invisible, change their colors by altering the spectrum of localized light, render them silent by bending sound waves in their vicinity, manipulate currents of electricity, make fires dance according to specific images and spread." }
    ]
    let level3Data = [
        { title: "Transmute Minor Forces", body: "The mage can manipulate Patterns of Forces, allowing them to convert forces into other types, shift their intensity radically, or even create force from nothing." }
    ]
    let level4Data = [
        { title: "Control Major Forces", body: "The mage can manipulate Force patterns on a wider scale, allowing them to use former effect on more than one Pattern. This allows them to change the weather, insulate a whole building or area of forest from fire and electricity, divert light into a series o rooms, banish all sounds from a huge cavern, or render a Chantry invisible to normal sight." }
    ]
    let level5Data = [
        { title: "Transmute Major Forces", body: "The mage can use their power on nearly all Force Patterns within their surroundings, summoning storms of fire, massive charges of electricity, shadows that blot out entire city blocks, and typhoons even in the midst of a calm day." }
    ]

    return (
        <SphereDetail
            title="Forces"
            icon={ico.for}
            level1Data={level1Data}
            level2Data={level2Data}
            level3Data={level3Data}
            level4Data={level4Data}
            level5Data={level5Data} />
    )
}

function Life() {
    let level1Data = [
        { title: "Sense Life", body: "The mage can sense the potency of a Life Pattern, measuring its relative health and well-being, as well as basic information (age, sex, etc.)" }
    ]
    let level2Data = [
        { title: "Alter Simple Patterns", body: "The mage can influence simple life forms, like fungi, invertebrates, or plants." },
        { title: "Heal Self", body: "The mage can fix smaller damages to their Pattern." }
    ]
    let level3Data = [
        { title: "Alter Self", body: "The mage can alter their Pattern in small ways. They may change the color of their hair, enhance their eyesight, grow claw-like fingernails or suspend their need to breathe oxygen for several hours." },
        { title: "Transform Simple Patterns", body: "bodThe mage can transform simple life forms into others, transforming i.e. a snail into a turnip.y" },
        { title: "Heal Others", body: "The mage can fix smaller damages in other Life Patterns." }
    ]
    let level4Data = [
        { title: "Alter Complex Patterns", body: "The mage can alter complex Life Patterns of vertebrates, possibly inflicting serious damages or enhancing their natural capabilities." },
        { title: "Transform Self", body: "The mage can transform their own pattern, allowing them to assume the shape of an animal of similar size or mass or transform their physical features to resemble another human." }
    ]
    let level5Data = [
        { title: "Transform Complex Patterns", body: "The mage can transform lifeforms into other lifeforms without altering their intelligence." },
        { title: "New Life", body: "The mage can create a Life Pattern that is not related to any previous Life pattern they have observed and which could have traits not found normally in nature, i.e. feeding on noble gases. The created creature lacks a soul, however (this demands auxiliary Spheres)." }
    ]

    return (
        <SphereDetail
            title="Life"
            icon={ico.lif}
            level1Data={level1Data}
            level2Data={level2Data}
            level3Data={level3Data}
            level4Data={level4Data}
            level5Data={level5Data} />
    )
}

function Matter() {
    let level1Data = [
        { title: "Matter Perceptions", body: " Allows the mage to see basic information about a Matter Pattern." }
    ]
    let level2Data = [
        { title: "Basic Transmutation", body: "Allows the mage to change one homogenous substance into another without affecting its shape, temperature, or basic state (i.e. lead to gold)." }
    ]
    let level3Data = [
        { title: "Alter Form", body: "Allows a mage to change the essential nature of a Mattern Pattern, changing its form or even compressing or expanding certain elements of its material properties (i.e. lead to fog)." }
    ]
    let level4Data = [
        { title: "Complex Transformation", body: "Allows the mage to transform Matter Patterns into complex objects composed of multiple independent pieces with different bases or combine homogenous materials to form alloys (i.e lead into a gun)." }
    ]
    let level5Data = [
        { title: "Alter PAllows the mage to create substances that transcend the limitations of scientific possibility, conjure materials unknown to Earthly reality, or share the deadly legacies of radioactive matter.roperties", body: "body" }
    ]

    return (
        <SphereDetail
            title="Matter"
            icon={ico.mat}
            level1Data={level1Data}
            level2Data={level2Data}
            level3Data={level3Data}
            level4Data={level4Data}
            level5Data={level5Data} />
    )
}

function Mind() {
    let level1Data = [
        { title: "Sense Thoughts and Emotions", body: "Allows a mage to recognize thought and mood impulses around them." },
        { title: "Empower Self", body: "Allows a mage to enhance their conscious abilities to improve mental skills." },
        { title: "Mind Shield", body: "Allows a mage to build a shield around their mind, hiding their Aura." }
    ]
    let level2Data = [
        { title: "Read Surface Thoughts", body: "Allows a mage to skim the contents of another's mind." },
        { title: "Create Impressions", body: "Allows a mage to determine particular flavours of Resonance an object within one's mind might have." },
        { title: "Mental Impulse", body: "Send a brief mental impulse (i.e rage, regret) against a target." },
        { title: "Empathic Bond", body: "Establish a short empathic link between two persons." }
    ]
    let level3Data = [
        { title: "Mental Link", body: "Establishes a link that allows the exchange of ideas or images between two persons." },
        { title: "Dreamwalk", body: "Allows a mage to control their own mind during their sleep, allowing for lucid dreaming, the creation of a Demesne or even entrance into the Dreaming." },
        { title: "Project Illusions", body: "Allows a mage to conjure mental images into a target." },
        { title: "Psychic Blast", body: "Attacks a target's mind with painful thoughts" }
    ]
    let level4Data = [
        { title: "Control Conscious Mind", body: "Allows a mage to invade another's mind." },
        { title: "Alter Consciousness", body: "Allows a mage to alter one's mind, changing memories and setting up posthypnotic suggestions and commands." },
        { title: "Astral Projection", body: "Allows a mage to project their own mind away from their physical form into the penumbra of the Astral Reaches." }
    ]
    let level5Data = [
        { title: "Control Subconscious", body: "Allows a mage to rewrite a subject's personality and beliefs totally." },
        { title: "Untether", body: "Allows a mage to separate their mind from their body for an extended period of time, leaving their body behind." },
        { title: "Forge Psyche", body: "Allows the mage to create an intelligence out of nowhere (Auxiliary Spheres are needed to anchor this intelligence somewhere)." }
    ]

    return (
        <SphereDetail
            title="Mind"
            icon={ico.min}
            level1Data={level1Data}
            level2Data={level2Data}
            level3Data={level3Data}
            level4Data={level4Data}
            level5Data={level5Data} />
    )
}

function Prime() {
    let level1Data = [
        { title: "Etheric Senses", body: "The mage can perceive Quintessential energy, and is alerted when someone uses magic in their vicinity." },
        { title: "Effuse Personal Quintessence", body: "Allows the mage to subsume small amounts Quintessence into their personal Pattern above their Avatar rating." },
        { title: "Consecration", body: "Allows a mage to enchant an object to change with them during shapeshifting, stepping sideways etc., by imbuing it with their personal Resonance." }
    ]
    let level2Data = [
        { title: "Fuel Pattern", body: "Allows the mage to store small amounts of Quintessence in an object." },
        { title: "Weave Odyllic Force", body: "The mage can summon bolts of pure Primal Energy against Patterns. This spell is nearly always vulgar." },
        { title: "Enchant Patterns", body: "Allows the mage to enchant the natural properties of a Pattern by tapping into its Quintessence, allowing it to interact with ephemeral objects." },
        { title: "Create Pattern", body: "In conjecture with other Spheres, the mage can create a simple Pattern out of thin air, by diverging the flow of Quintessence in the Tellurian into the new form he wants to create." },
        { title: "Body of Light", body: "Allows the mage to conjure an idealized self projected from ephemeral energy." }
    ]
    let level3Data = [
        { title: "Channel Quintessence", body: "The mage can draw free-flowing Quintessence from a Node, Juncture or Tass into their pattern or transfer Quintessence from their own Pattern into another Pattern." },
        { title: "Sublimate Quintessential Matter & Forces", body: "Allows the mage to shape inanimate Tass into a temporary Wonder or Periapt." },
        { title: "Activate Quintessential Life", body: "Allows a mage to create temporary lifeforms in conjunction with the Life Sphere by drawing Quintessence into a pattern." },
        { title: "Enchant Life", body: "Allows a mage to enchant lifeforms to harm Patterns directly." }
    ]
    let level4Data = [
        { title: "Expel Base Energy from Matter & Forces", body: "The Mage gains the power to harvest Quintessence directly from inanimate Patterns, draining them from their energy." },
        { title: "Sublimate Quintessential Life", body: "The Mage can transform living Tass into pure quintessential energy." },
        { title: "Permanently Enchant Matter & Forces", body: "Allows the mage to create stable Wonders and Periapts for personal use." },
        { title: "Suffuse Matter & Forces", body: "The Mage can create inanimate Tass from Quintessence." },
        { title: "Create Soulgem", body: "The mage can create a small periapt that resonates with their own Avatar, allowing only them to utilize it." },
        { title: "Tap Wellspring", body: "At a place of strong Resonance, the mage can gather a small amount of Quintessence from it." }
    ]
    let level5Data = [
        { title: "Expel Base Energy from Life", body: "Rend Quintessence from a living Pattern." },
        { title: "Alter Quintessential Flow", body: "Allows a mage to refresh a Pattern with new Quintessence." },
        { title: "Nullify Paradox", body: "Allows a mage to use Primal Energy to smooth over disturbations in the Tapestry, nullifying Paradox." },
        { title: "Permanently Enchant Life", body: "Make enchantments on a living Pattern permanent." },
        { title: "Suffuse Life", body: "Consecrate a being with Quintessence to form living Tass." },
        { title: "Create Soulflower", body: "Allows a mage to create a living Periapt from their own Avatar." },
        { title: "Fountains of Paradise", body: "The mage can create a new Node or Juncture by manipulating the global flow of Quintessence to a strong place of Resonance." }
    ]

    return (
        <SphereDetail
            title="Prime"
            icon={ico.pri}
            level1Data={level1Data}
            level2Data={level2Data}
            level3Data={level3Data}
            level4Data={level4Data}
            level5Data={level5Data} />
    )
}

function PrimalUtility() {
    let level1Data = [
        { title: "title", body: "body" }
    ]
    let level2Data = [
        { title: "title", body: "body" }
    ]
    let level3Data = [
        { title: "title", body: "body" }
    ]
    let level4Data = [
        { title: "title", body: "body" }
    ]
    let level5Data = [
        { title: "title", body: "body" }
    ]

    return (
        <SphereDetail
            title="Primal Utility"
            icon={ico.uti}
            level1Data={level1Data}
            level2Data={level2Data}
            level3Data={level3Data}
            level4Data={level4Data}
            level5Data={level5Data} />
    )
}

function Spirit() {
    let level1Data = [
        { title: "Spirit Senses", body: "Allows a mage to peek into the Penumbra and determine the local strength of the Gauntlet." }
    ]
    let level2Data = [
        { title: "Touch Spirit", body: "The mage can affect small things on the other side of the Gauntlet while remaining in the physical world." },
        { title: "Manipulate Gauntlet", body: "The mage can slightly thicken or thin the local Gauntlet." }
    ]
    let level3Data = [
        { title: "Pierce Gauntlet", body: "The mage can create a temporary rift within the Gauntlet." },
        { title: "Step Sideways", body: "The mage can step through smaller rifts within the Gauntlet and enter the Spirit World." },
        { title: "Rouse And Lull Spirit", body: "The mage can influence spirits, either rousing them to action or lulling them to sleep. It is also possible to harm Spirits with this level." }
    ]
    let level4Data = [
        { title: "Rend and Repair Gauntlet", body: "The mage can rend or repair the Gauntlet, allowing multiple persons to enter it." },
        { title: "Bind Spirits", body: "The mage can summon or otherwise compel Spirits to fulfill his orders." }
    ]
    let level5Data = [
        { title: "Forge Ephemera ", body: "The mage can shape ephemera as they see fit, creating new Realms or healing or transforming the Pattern of a Spirit." },
        { title: "Outward Journeys", body: "The mage can cross the Outer Horizon, entering the Deep Umbra." },
        { title: "Gilgul", body: "The mage can attack a target's Avatar." }
    ]

    return (
        <SphereDetail
            title="Spirit"
            icon={ico.spi}
            level1Data={level1Data}
            level2Data={level2Data}
            level3Data={level3Data}
            level4Data={level4Data}
            level5Data={level5Data} />
    )
}

function DimensionalScience() {
    let level1Data = [
        { title: "title", body: "body" }
    ]
    let level2Data = [
        { title: "title", body: "body" }
    ]
    let level3Data = [
        { title: "title", body: "body" }
    ]
    let level4Data = [
        { title: "title", body: "body" }
    ]
    let level5Data = [
        { title: "title", body: "body" }
    ]

    return (
        <SphereDetail
            title="Dimensional Science"
            icon={ico.dim}
            level1Data={level1Data}
            level2Data={level2Data}
            level3Data={level3Data}
            level4Data={level4Data}
            level5Data={level5Data} />
    )
}

function Time() {
    let level1Data = [
        { title: "Time Sense", body: "Allows a mage to determine the exact time of day down to the second. In addition, they become aware of distortions of the stream of time in their local area." }
    ]
    let level2Data = [
        { title: "Time Sight", body: "Allows a mage to see forward or backward through time. Although those impressions are fleeting, hazy, not entirely accurate, and bound by the limitations of that time and place (that is, what a bystander in that specific time and location could sense under the circumstances), they are nonetheless useful." },
        { title: "Thicken the Walls of Time", body: "Enhance the rigidity of the local Timeline to ward it against manipulation." }
    ]
    let level3Data = [
        { title: "Time Contraction Or Dilation", body: "Allows a mage to alter the rate at which things happen in comparison to the \"normal world.\"" },
        { title: "\"Bullet Time\"", body: "Allows a mage to slow things down (without changing the subjective time)." },
        { title: "Rewind Time", body: "Allows a mage to rewind or loop time for a few seconds or minutes." }
    ]
    let level4Data = [
        { title: "Time Determinism", body: "Allows a mage to literally stop time in its tracks." },
        { title: "Time Bubble", body: "Allows to capture other beings or phenomena in bubbles of time." },
        { title: "Trigger Effect", body: "Allows the mage to generate a keyed pause", body: "Something that does not happen until a specific person, creature, or item comes into the right position." },
        { title: "Anchor Point", body: "Allows to create temporal anchors for the mage in the case that they travel through time." }
    ]
    let level5Data = [
        { title: "Time Travel", body: "With an anchor point in the present, the mage can send themself or other people or things into the near future or past temporarily." },
        { title: "Time Immunity", body: "The mage begins to exist outside of the temporal flow and can pull objects into their own temporal field." }
    ]

    return (
        <SphereDetail
            title="Time"
            icon={ico.tim}
            level1Data={level1Data}
            level2Data={level2Data}
            level3Data={level3Data}
            level4Data={level4Data}
            level5Data={level5Data} />
    )
}

const styles = StyleSheet.create({
    sphereLink: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center'
    },
    sphereText: {
        marginTop: 10,
        marginBottom: 10,
        marginLeft: 5,
        marginRight: 5,
        color: 'blue',
        fontSize: 18,
        textAlign: 'center'
    },
    sphereImage: {
        width: 23,
        height: 23,
        resizeMode: 'center'
    }
})

const detail = StyleSheet.create({
    container: {
        marginTop: 10, marginBottom: 5
    },
    headerRow: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center'
    },
    sphereTextLarge: {
        marginLeft: 10,
        marginRight: 10,
        fontSize: 25,
        textAlign: 'center'
    },
    sphereImageLarge: {
        width: 50,
        height: 50,
        resizeMode: 'center'
    },
    powersTitle: {
        fontSize: 20,
        marginTop: 10,
        textDecorationLine: 'underline'
    },
    leftIndent: {
        marginLeft: 10
    },
    rightGutter: {
        marginRight: 10
    },
    dotsGroupWrapper: {
        marginTop: 10
    },
    dotsWrapper: {
        marginBottom: 2
    },
    powerTitle: {
        fontWeight: 'bold'
    }
})