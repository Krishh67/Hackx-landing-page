"use client"

import { Canvas, useFrame } from "@react-three/fiber"
import { Environment } from "@react-three/drei"
import { useRef, useMemo, Suspense } from "react"
import type * as THREE from "three"

function F1Car() {
  const carRef = useRef<THREE.Group>(null)
  const wheelFLRef = useRef<THREE.Mesh>(null)
  const wheelFRRef = useRef<THREE.Mesh>(null)
  const wheelRLRef = useRef<THREE.Mesh>(null)
  const wheelRRRef = useRef<THREE.Mesh>(null)
  const time = useRef(0)

  useFrame((state, delta) => {
    if (!carRef.current) return
    time.current += delta

    // Dramatic drift movement - car sliding sideways
    const driftAngle = Math.sin(time.current * 0.5) * 0.4
    const slideX = Math.sin(time.current * 0.3) * 3

    carRef.current.position.x = slideX
    carRef.current.position.z = Math.cos(time.current * 0.3) * 2 - 2
    carRef.current.rotation.y = Math.PI / 4 + driftAngle // Angled for drift look

    // Subtle suspension movement
    carRef.current.position.y = 0.1 + Math.sin(time.current * 8) * 0.02

    // Spin all wheels fast
    const wheelSpeed = delta * 25
    if (wheelFLRef.current) wheelFLRef.current.rotation.x += wheelSpeed
    if (wheelFRRef.current) wheelFRRef.current.rotation.x += wheelSpeed
    if (wheelRLRef.current) wheelRLRef.current.rotation.x += wheelSpeed
    if (wheelRRRef.current) wheelRRRef.current.rotation.x += wheelSpeed
  })

  return (
    <group ref={carRef} position={[0, 0.1, 0]} scale={0.7}>
      {/* Main monocoque body - sleek Ferrari red */}
      <mesh position={[0, 0.35, 0]} castShadow>
        <boxGeometry args={[1.2, 0.35, 4.5]} />
        <meshStandardMaterial color="#dc0000" metalness={0.9} roughness={0.15} />
      </mesh>

      {/* Nose cone - pointed and aggressive */}
      <mesh position={[0, 0.3, 2.5]} castShadow>
        <coneGeometry args={[0.4, 1.2, 4]} />
        <meshStandardMaterial color="#dc0000" metalness={0.9} roughness={0.15} />
      </mesh>

      {/* Cockpit halo */}
      <mesh position={[0, 0.7, -0.2]} castShadow>
        <torusGeometry args={[0.35, 0.05, 8, 16, Math.PI]} />
        <meshStandardMaterial color="#1a1a1a" metalness={0.95} roughness={0.1} />
      </mesh>

      {/* Cockpit opening */}
      <mesh position={[0, 0.55, -0.2]} castShadow>
        <boxGeometry args={[0.5, 0.15, 0.8]} />
        <meshStandardMaterial color="#0a0a0a" metalness={0.2} roughness={0.9} />
      </mesh>

      {/* Sidepods - left */}
      <mesh position={[-0.7, 0.35, -0.3]} castShadow>
        <boxGeometry args={[0.5, 0.4, 2]} />
        <meshStandardMaterial color="#dc0000" metalness={0.9} roughness={0.15} />
      </mesh>

      {/* Sidepods - right */}
      <mesh position={[0.7, 0.35, -0.3]} castShadow>
        <boxGeometry args={[0.5, 0.4, 2]} />
        <meshStandardMaterial color="#dc0000" metalness={0.9} roughness={0.15} />
      </mesh>

      {/* Front wing main plane */}
      <mesh position={[0, 0.15, 2.8]} castShadow>
        <boxGeometry args={[1.8, 0.03, 0.5]} />
        <meshStandardMaterial color="#1a1a1a" metalness={0.8} roughness={0.2} />
      </mesh>

      {/* Front wing endplates */}
      <mesh position={[-0.9, 0.2, 2.8]} castShadow>
        <boxGeometry args={[0.03, 0.2, 0.6]} />
        <meshStandardMaterial color="#dc0000" metalness={0.9} roughness={0.15} />
      </mesh>
      <mesh position={[0.9, 0.2, 2.8]} castShadow>
        <boxGeometry args={[0.03, 0.2, 0.6]} />
        <meshStandardMaterial color="#dc0000" metalness={0.9} roughness={0.15} />
      </mesh>

      {/* Rear wing main element */}
      <mesh position={[0, 0.85, -2.1]} castShadow>
        <boxGeometry args={[1.4, 0.05, 0.35]} />
        <meshStandardMaterial color="#1a1a1a" metalness={0.8} roughness={0.2} />
      </mesh>

      {/* Rear wing DRS flap */}
      <mesh position={[0, 0.95, -2]} castShadow>
        <boxGeometry args={[1.4, 0.03, 0.25]} />
        <meshStandardMaterial color="#1a1a1a" metalness={0.8} roughness={0.2} />
      </mesh>

      {/* Rear wing endplates */}
      <mesh position={[-0.7, 0.75, -2]} castShadow>
        <boxGeometry args={[0.03, 0.5, 0.5]} />
        <meshStandardMaterial color="#dc0000" metalness={0.9} roughness={0.15} />
      </mesh>
      <mesh position={[0.7, 0.75, -2]} castShadow>
        <boxGeometry args={[0.03, 0.5, 0.5]} />
        <meshStandardMaterial color="#dc0000" metalness={0.9} roughness={0.15} />
      </mesh>

      {/* Engine cover / airbox */}
      <mesh position={[0, 0.65, -0.8]} castShadow>
        <boxGeometry args={[0.4, 0.3, 1.5]} />
        <meshStandardMaterial color="#dc0000" metalness={0.9} roughness={0.15} />
      </mesh>

      {/* Floor/diffuser */}
      <mesh position={[0, 0.08, -1.8]} castShadow>
        <boxGeometry args={[1.5, 0.05, 1]} />
        <meshStandardMaterial color="#1a1a1a" metalness={0.7} roughness={0.3} />
      </mesh>

      {/* Wheels - Front Left */}
      <group position={[-0.75, 0.22, 1.5]}>
        <mesh ref={wheelFLRef} rotation={[0, 0, Math.PI / 2]} castShadow>
          <cylinderGeometry args={[0.33, 0.33, 0.28, 24]} />
          <meshStandardMaterial color="#1a1a1a" roughness={0.9} />
        </mesh>
        <mesh rotation={[0, 0, Math.PI / 2]}>
          <cylinderGeometry args={[0.2, 0.2, 0.29, 5]} />
          <meshStandardMaterial color="#bfa100" metalness={0.95} roughness={0.1} />
        </mesh>
      </group>

      {/* Wheels - Front Right */}
      <group position={[0.75, 0.22, 1.5]}>
        <mesh ref={wheelFRRef} rotation={[0, 0, Math.PI / 2]} castShadow>
          <cylinderGeometry args={[0.33, 0.33, 0.28, 24]} />
          <meshStandardMaterial color="#1a1a1a" roughness={0.9} />
        </mesh>
        <mesh rotation={[0, 0, Math.PI / 2]}>
          <cylinderGeometry args={[0.2, 0.2, 0.29, 5]} />
          <meshStandardMaterial color="#bfa100" metalness={0.95} roughness={0.1} />
        </mesh>
      </group>

      {/* Wheels - Rear Left */}
      <group position={[-0.75, 0.25, -1.3]}>
        <mesh ref={wheelRLRef} rotation={[0, 0, Math.PI / 2]} castShadow>
          <cylinderGeometry args={[0.38, 0.38, 0.32, 24]} />
          <meshStandardMaterial color="#1a1a1a" roughness={0.9} />
        </mesh>
        <mesh rotation={[0, 0, Math.PI / 2]}>
          <cylinderGeometry args={[0.22, 0.22, 0.33, 5]} />
          <meshStandardMaterial color="#bfa100" metalness={0.95} roughness={0.1} />
        </mesh>
      </group>

      {/* Wheels - Rear Right */}
      <group position={[0.75, 0.25, -1.3]}>
        <mesh ref={wheelRRRef} rotation={[0, 0, Math.PI / 2]} castShadow>
          <cylinderGeometry args={[0.38, 0.38, 0.32, 24]} />
          <meshStandardMaterial color="#1a1a1a" roughness={0.9} />
        </mesh>
        <mesh rotation={[0, 0, Math.PI / 2]}>
          <cylinderGeometry args={[0.22, 0.22, 0.33, 5]} />
          <meshStandardMaterial color="#bfa100" metalness={0.95} roughness={0.1} />
        </mesh>
      </group>

      {/* Scuderia Ferrari logo area - yellow accent */}
      <mesh position={[0.61, 0.56, -0.3]}>
        <planeGeometry args={[0.25, 0.25]} />
        <meshStandardMaterial color="#ffd800" />
      </mesh>
      <mesh position={[-0.61, 0.56, -0.3]} rotation={[0, Math.PI, 0]}>
        <planeGeometry args={[0.25, 0.25]} />
        <meshStandardMaterial color="#ffd800" />
      </mesh>
    </group>
  )
}

function TireSmoke() {
  const smokeRef = useRef<THREE.Points>(null)
  const time = useRef(0)

  const particles = useMemo(() => {
    const count = 200
    const positions = new Float32Array(count * 3)
    const opacities = new Float32Array(count)

    for (let i = 0; i < count; i++) {
      const seed = i * 7919
      positions[i * 3] = ((seed % 100) / 100 - 0.5) * 4
      positions[i * 3 + 1] = (((seed * 3) % 100) / 100) * 1.5
      positions[i * 3 + 2] = (((seed * 7) % 100) / 100 - 0.5) * 6 - 3
      opacities[i] = (seed % 100) / 100
    }
    return { positions, opacities }
  }, [])

  useFrame((state, delta) => {
    if (smokeRef.current) {
      time.current += delta
      smokeRef.current.rotation.y = Math.sin(time.current * 0.3) * 0.2
      smokeRef.current.position.x = Math.sin(time.current * 0.3) * 3
      smokeRef.current.position.z = Math.cos(time.current * 0.3) * 2 - 5
    }
  })

  return (
    <points ref={smokeRef} position={[0, 0, -2]}>
      <bufferGeometry>
        <bufferAttribute attach="attributes-position" count={200} array={particles.positions} itemSize={3} />
      </bufferGeometry>
      <pointsMaterial size={0.3} color="#888888" transparent opacity={0.4} sizeAttenuation depthWrite={false} />
    </points>
  )
}

function Track() {
  return (
    <group>
      {/* Main asphalt surface */}
      <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, 0, 0]} receiveShadow>
        <planeGeometry args={[50, 50]} />
        <meshStandardMaterial color="#1a1a1a" roughness={0.95} metalness={0.05} />
      </mesh>

      {/* Tire marks / drift lines */}
      <mesh rotation={[-Math.PI / 2, 0, 0]} position={[-1, 0.01, -2]}>
        <planeGeometry args={[0.15, 12]} />
        <meshStandardMaterial color="#0f0f0f" roughness={1} transparent opacity={0.7} />
      </mesh>
      <mesh rotation={[-Math.PI / 2, 0.1, 0]} position={[1, 0.01, -2]}>
        <planeGeometry args={[0.15, 12]} />
        <meshStandardMaterial color="#0f0f0f" roughness={1} transparent opacity={0.7} />
      </mesh>

      {/* Red and white kerb - left side */}
      {Array.from({ length: 20 }).map((_, i) => (
        <mesh key={`kerb-l-${i}`} position={[-10, 0.02, -10 + i * 1]} rotation={[-Math.PI / 2, 0, 0]}>
          <planeGeometry args={[1, 0.8]} />
          <meshStandardMaterial color={i % 2 === 0 ? "#dc0000" : "#ffffff"} />
        </mesh>
      ))}

      {/* Red and white kerb - right side */}
      {Array.from({ length: 20 }).map((_, i) => (
        <mesh key={`kerb-r-${i}`} position={[10, 0.02, -10 + i * 1]} rotation={[-Math.PI / 2, 0, 0]}>
          <planeGeometry args={[1, 0.8]} />
          <meshStandardMaterial color={i % 2 === 0 ? "#dc0000" : "#ffffff"} />
        </mesh>
      ))}

      {/* Starting grid box */}
      <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, 0.01, 8]}>
        <planeGeometry args={[3, 5]} />
        <meshStandardMaterial color="#ffffff" transparent opacity={0.15} />
      </mesh>
    </group>
  )
}

function SpotLights() {
  return (
    <>
      {/* Key light - dramatic side lighting */}
      <spotLight
        position={[10, 12, 5]}
        angle={0.4}
        penumbra={0.8}
        intensity={200}
        color="#ffffff"
        castShadow
        shadow-mapSize={1024}
      />

      {/* Fill light - softer */}
      <spotLight position={[-8, 8, 8]} angle={0.5} penumbra={1} intensity={80} color="#ff4444" />

      {/* Back light - rim lighting effect */}
      <spotLight position={[0, 10, -15]} angle={0.6} penumbra={0.5} intensity={150} color="#ffffff" />

      {/* Ground bounce light */}
      <pointLight position={[0, 0.5, 0]} intensity={5} color="#dc0000" distance={10} />
    </>
  )
}

function SpeedLines() {
  const linesRef = useRef<THREE.Group>(null)

  useFrame((state, delta) => {
    if (linesRef.current) {
      linesRef.current.children.forEach((child, i) => {
        child.position.z += delta * 15
        if (child.position.z > 10) {
          child.position.z = -20
        }
      })
    }
  })

  const lines = useMemo(() => {
    return Array.from({ length: 30 }).map((_, i) => ({
      x: ((i % 10) - 5) * 3 + (((i * 17) % 10) - 5) * 0.5,
      y: ((i * 13) % 10) * 0.3 + 0.5,
      z: -20 + ((i * 7) % 30),
      length: 1 + (((i * 23) % 10) / 10) * 2,
    }))
  }, [])

  return (
    <group ref={linesRef}>
      {lines.map((line, i) => (
        <mesh key={i} position={[line.x, line.y, line.z]}>
          <boxGeometry args={[0.02, 0.02, line.length]} />
          <meshBasicMaterial color="#dc0000" transparent opacity={0.6} />
        </mesh>
      ))}
    </group>
  )
}

function Scene() {
  return (
    <>
      <fog attach="fog" args={["#0a0a0a", 15, 40]} />
      <color attach="background" args={["#0a0a0a"]} />

      <ambientLight intensity={0.15} />
      <SpotLights />

      <F1Car />
      <TireSmoke />
      <Track />
      <SpeedLines />

      <Environment preset="night" />
    </>
  )
}

export function F1Scene() {
  return (
    <div className="absolute inset-0 z-0">
      <Canvas
        shadows
        camera={{ position: [6, 3, 8], fov: 50, near: 0.1, far: 100 }}
        gl={{ antialias: true, alpha: false, powerPreference: "high-performance" }}
        dpr={[1, 1.5]}
      >
        <Suspense fallback={null}>
          <Scene />
        </Suspense>
      </Canvas>
    </div>
  )
}
