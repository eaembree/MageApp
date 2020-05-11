import React from 'react';
import { createStackNavigator } from '@react-navigation/stack'
import { View, Text, StyleSheet, ScrollView, TouchableOpacity, Image } from 'react-native';

import { MagePurple, MageGold } from './Styles';
import { Icons128 } from './MageIcons'
import { FontAwesome5 } from '@expo/vector-icons';
import { clamp } from './utils/Math'

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